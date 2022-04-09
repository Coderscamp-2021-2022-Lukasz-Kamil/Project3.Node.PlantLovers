import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../../global-styles/GlobalStyles";
import { theme } from "../../../theme/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddOfferPage from "../AddOfferPage/AddOfferPage";
import PlantsPage from "../PlantsPage/PlantsPage";
import UserPage from "../ProfilePage/ProfilePage";
import NotFoundPage from "../NotFound/NotFound";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../ProfilePage/LoginPage";
import SignUpPage from "../ProfilePage/SignUpPage";
import YourOfferPage from "../ProfilePage/YourOfferPage";
import AdminLoginPage from "../AdminPage/AdminLoginPage";
import AdminCategoriesAndHeightsPage from "../AdminPage/AdminCategoriesAndHeightsPage";
import AdminUsersOffersPage from "../AdminPage/AdminUsersOffersPage";
import AdminUsersPage from "../AdminPage/AdminUsersPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add-offer" element={<AddOfferPage />} />
          <Route path="/plants" element={<PlantsPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/user/sign-up" element={<SignUpPage />} />
          <Route path="/user/your-offers" element={<YourOfferPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route
            path="admin/categories-and-heights"
            element={<AdminCategoriesAndHeightsPage />}
          />
          <Route
            path="/admin/offers/users-offers"
            element={<AdminUsersOffersPage />}
          />
          <Route path="/admin/offers/users" element={<AdminUsersPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
