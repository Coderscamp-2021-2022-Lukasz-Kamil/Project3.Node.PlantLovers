import axios from "axios";
import { BASE_URL } from "../../hooks/UseFetch";
import Offer from "../intefaces/offer.interface";
import Height from "../intefaces/height.interface";
import Category from "../intefaces/category.interface";
import { toast } from "react-toastify";

export const handleDeleteOffer = async (id: string, token: any) => {
  try {
    await axios({
      method: "DELETE",
      url: `${BASE_URL}/offers/${id}`,
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        token: token["token"],
      },
    });

    const getOffersResponse = await axios({
      url: "/offers",
    });

    return getOffersResponse.data as Offer[];
  } catch (error) {
    toast.error("Cannot delete offer");
  }
};

export const handleActivateOffer = async (id: string, token: any) => {
  try {
    await axios({
      method: "PUT",
      url: `${BASE_URL}/offers/activate/${id}`,
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        token: token["token"],
      },
    });

    const getOffersResponse = await axios({
      url: "/offers",
    });

    return getOffersResponse.data as Offer[];
  } catch (err) {
    toast.error("Cannot activate offer");
  }
};

export const handleDeleteHeight = async (id: string, token: any) => {
  try {
    await axios({
      method: "DELETE",
      url: `${BASE_URL}/heights/${id}`,
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjU5ZGNlNzkzYzk4MWIxZDEzOThiMTMiLCJyb2wiOnRydWUsImlhdCI6MTY1MjM3NjcwNCwiZXhwIjoxNjU1OTc2NzA0fQ.HAQL6KXkrVwCPBb7vjf3AEsxpkVyTjERz6ZknRWDOUU",
      },
    });

    const getHeightsResponse = await axios({
      url: "/heights",
    });

    return getHeightsResponse.data as Height[];
  } catch (error) {
    toast.error("Cannot delete height");
  }
};

export const handleDeleteCategory = async (id: string, token: any) => {
  try {
    await axios({
      method: "DELETE",
      url: `${BASE_URL}/categories/${id}`,
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        token: token["token"],
      },
    });

    const getCategoriesResponse = await axios({
      url: "/categories",
    });

    return getCategoriesResponse.data as Category[];
  } catch (error) {
    toast.error("Cannot delete category");
  }
};

export const handleCreateHeight = async (range: string, token: any) => {
  try {
    await axios({
      method: "POST",
      url: BASE_URL + "/heights",
      data: {
        range: range,
      },
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjU5ZGNlNzkzYzk4MWIxZDEzOThiMTMiLCJyb2wiOnRydWUsImlhdCI6MTY1MjM3NjcwNCwiZXhwIjoxNjU1OTc2NzA0fQ.HAQL6KXkrVwCPBb7vjf3AEsxpkVyTjERz6ZknRWDOUU",
      },
    });
    const getHeightsResponse = await axios({
      url: "/heights",
    });
    return getHeightsResponse.data as Height[];
  } catch (error) {
    toast.error("Cannot add height");
  }
};

export const getHeights = async () => {
  try {
    const getHeightsResponse = await axios({
      url: "/heights",
    });
    return getHeightsResponse.data as Height[];
  } catch (error) {
    toast.error("Cannot load heights");
  }
};

export const handleCreateCategory = async (name: string, token: any) => {
  try {
    await axios({
      method: "POST",
      url: BASE_URL + "/categories",
      data: {
        name: name,
      },
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjU5ZGNlNzkzYzk4MWIxZDEzOThiMTMiLCJyb2wiOnRydWUsImlhdCI6MTY1MjM3NjcwNCwiZXhwIjoxNjU1OTc2NzA0fQ.HAQL6KXkrVwCPBb7vjf3AEsxpkVyTjERz6ZknRWDOUU",
      },
    });
    const getCategoriesResponse = await axios({
      url: "/categories",
    });
    return getCategoriesResponse.data as Category[];
  } catch (error) {
    toast.error("Cannot add category");
  }
};

export const getCategories = async () => {
  try {
    const getCategoriesResponse = await axios({
      url: "/categories",
    });
    return getCategoriesResponse.data as Category[];
  } catch (error) {
    toast.error("Cannot load categories");
  }
};
