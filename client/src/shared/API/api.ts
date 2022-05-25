import axios from "axios";
import { BASE_URL } from "../../hooks/UseFetch";
import Offer from "../intefaces/offer.interface";
import Height from "../intefaces/height.interface";
import Category from "../intefaces/category.interface";
import User from "../intefaces/user.interface";
import Photo from "../intefaces/photos.interface";
import { toast } from "react-toastify";

export interface NewOffer {
  token: any;
  title: string;
  description: string;
  city: string;
  phoneNumber: string;
  photos: Photo[];
  category: Category;
  height: Height;
  forExchange: boolean;
  price: string;
  userId: string;
}

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
        token: token["token"],
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

export const handleDeleteUser = async (id: string, token: any) => {
  try {
    await axios({
      method: "DELETE",
      url: `${BASE_URL}/users/${id}`,
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        token: token["token"],
      },
    });
    const getUsersResponse = await axios({
      url: "/users",
    });
    return getUsersResponse.data as User[];
  } catch (error) {
    toast.error("Cannot delete user");
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

export const handleChangeToAdmin = async (id: string, token: any) => {
  try {
    await axios({
      method: "PUT",
      url: `${BASE_URL}/users/admin/${id}`,
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        token: token["token"],
      },
    });
    const getUsersResponse = await axios({
      url: "/users",
    });
    return getUsersResponse.data as User[];
  } catch (error) {
    toast.error("Cannot change user to Admin");
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
        token: token["token"],
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
        token: token["token"],
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
    console.log(getCategoriesResponse);
    return getCategoriesResponse.data as Category[];
  } catch (error) {
    toast.error("Cannot load categories");
  }
};

export const handleAddOffer = async ({
  title,
  description,
  city,
  phoneNumber,
  category,
  height,
  price,
  forExchange,
  photos,
  userId,
  token,
}: NewOffer) => {
  try {
    await axios({
      method: "POST",
      url: BASE_URL + "/offers",
      data: {
        title: title,
        description: description,
        city: city,
        phoneNumber: phoneNumber,
        category: category,
        height: height,
        price: price,
        forExchange: forExchange,
        userId: userId,
        photos: photos,
      },
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        token: token["token"],
      },
    });
  } catch (err: any) {
    toast.error("Cannot add offer");
  }
};
