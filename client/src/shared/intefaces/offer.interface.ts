import Category from "./category.interface";
import Height from "./height.interface";
import Location from "./location.interface";
import Photos from "./photos.interface";

interface Offer {
  title: string;
  description: string;
  city: string;
  location?: Location;
  phoneNumber: string;
  dateCreated: Date;
  dateUpdated: Date;
  photos: Photos[];
  category: Category;
  height: Height;
  views: number;
  price: number;
  forExchange: boolean;
  isActive: boolean;
  isArchived: boolean;
  _id: string;
  userId: string;
}

export default Offer;
