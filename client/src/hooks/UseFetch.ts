import { useState, useEffect, useCallback } from "react";
import axios, { AxiosRequestHeaders, Method } from "axios";

interface FetchDataParams {
  url: string;
  method: Method;
  headers?: AxiosRequestHeaders | undefined;
  body?: Record<string, unknown>;
}
export const BASE_URL = "http://localhost:3000";
axios.defaults.method = "GET";
axios.defaults.baseURL = BASE_URL;

const useFetchData = (params: FetchDataParams) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState<unknown | undefined>(undefined);
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
    } catch (err: unknown) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};

export default useFetchData;
