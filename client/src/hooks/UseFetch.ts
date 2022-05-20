import { useState, useEffect, useCallback } from "react";
import axios, { AxiosRequestHeaders, Method } from "axios";

interface FetchDataParams {
  url: string;
  method: Method;
  headers?: AxiosRequestHeaders | undefined;
  body?: Record<string, unknown>;
}

export const BASE_URL = "https://plant-lovers.herokuapp.com";
// export const BASE_URL = "http://localhost:3000";
axios.defaults.method = "GET";
axios.defaults.baseURL = BASE_URL;

const useFetchData = <T>(params: FetchDataParams) => {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState<any | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const result = await axios.request({
        method: params.method,
        url: params.url,
        data: params.body,
        headers: params.headers,
      });
      setResponse(result.data);
      setError(undefined);
    } catch (err: any) {
      setError(err.response.data || "Something goes wrong!");
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchData();
  }, [params.url]);

  return { response, error, loading };
};

export default useFetchData;
