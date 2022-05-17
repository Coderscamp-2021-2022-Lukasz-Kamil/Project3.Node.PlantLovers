import axios from "axios";
import { BASE_URL } from "../../hooks/UseFetch";
import Offer from "../intefaces/offer.interface";
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
