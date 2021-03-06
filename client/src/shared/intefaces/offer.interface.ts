import Category from "./category.interface";
import Height from "./height.interface";
import Location from "./location.interface";
import Photo from "./photos.interface";
import User from "./user.interface";

interface Offer {
  title: string;
  description: string;
  city: string;
  location?: Location;
  phoneNumber: string;
  email?: string;
  dateCreated: string;
  dateUpdated: string;
  photos: Photo[];
  category: Category;
  height: Height;
  views: number;
  price: number;
  forExchange: boolean;
  isActive: boolean;
  isArchived: boolean;
  _id: string;
  userId: User;
}

export default Offer;
