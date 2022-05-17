interface User {
  email: string;
  password: string;
  isAdmin: boolean;
  phoneNumber?: string;
  city?: string;
  isActive: boolean;
}

export default User;
