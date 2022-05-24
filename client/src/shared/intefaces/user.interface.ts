interface User {
  email: string;
  password: string;
  isAdmin: boolean;
  phoneNumber?: string;
  city?: string;
  isActive: boolean;
  _id: string;
}

export default User;
