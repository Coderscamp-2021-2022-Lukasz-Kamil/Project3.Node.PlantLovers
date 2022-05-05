import Category from "./category.interface";
import Height from "./height.interface";
import Location from "./location.interface";
import Photo from "./photos.interface";
import User from "./user.interface";

interface Offer {
  id: number;
  title: string;
  description: string;
  city: string;
  location?: Location;
  phoneNumber: string;
  email: string;
  dateCreated: Date;
  dateUpdated: Date;
  photos: Photo[];
  category: Category;
  height: Height;
  views: number;
  price: number;
  forExchange: boolean;
  isActive: boolean;
  isArchived: boolean;
  userId: User;
}

export default Offer;
