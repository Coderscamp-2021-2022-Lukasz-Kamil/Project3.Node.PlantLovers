export interface Offer {
  category: string;
  city: string;
  description: string;
  forExchange: boolean;
  height: string;
  isActive: boolean;
  isArchived: boolean;
  phoneNumber: string;
  photos: Photo[];
  price: number;
  title: string;
  userId: string;
  _id: string;
}

export interface Photo {
  isMainPhoto: boolean;
  url: string;
  _id: string;
}
