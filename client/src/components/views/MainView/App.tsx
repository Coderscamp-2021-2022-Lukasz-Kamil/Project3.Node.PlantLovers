import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../../global-styles/GlobalStyles";
import { theme } from "../../../theme/theme";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import AddOfferPage from "../AddOfferPage/AddOfferPage";
import PlantsPage from "../PlantsPage/PlantsPage";
import UserPage from "../ProfilePage/ProfilePage/ProfilePage";
import NotFoundPage from "../NotFound/NotFound";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../ProfilePage/LoginPage";
import SignUpPage from "../ProfilePage/SignUpPage";
import YourOfferPage from "../ProfilePage/YourOfferPage/YourOfferPage";
import AdminLoginPage from "../AdminPage/AdminLoginPage";
import CategoriesAndHeightsPage from "../AdminPage/OffersCategoriesAndHeightsBar/CategoriesAndHeightsPage";
import AdminUsersOffersPage from "../AdminPage/UsersOffersPage/AdminUsersOffersPage";
import ManageUsersPage from "../AdminPage/ManageUsersPage/AdminUsersPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { NavigationBar } from "../NavigationBar/MainNavigationBar/NavigationBar";
import { AdminNavigationBar } from "../AdminPage/NavigationBar/AdminNavigationBar";
import AdminSettings from "../AdminPage/AdminSettings";
import { LoginNavigationBar } from "../NavigationBar/LoginNavigationBar/LoginNavigationBar";
import GlobalFonts from "../../../font/fonts";
import Offer from "../OfferPage/OfferPage";
import { ProfileAndYourOfferBar } from "../ProfilePage/ProfileAndYourOfferBar/ProfileAndYourOfferBar";
import AccountActivation from "../ProfilePage/AccountActivation";
import { CategoriesAndHeightsBar } from "../AdminPage/OffersCategoriesAndHeightsBar/CategoriesAndHeightsBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalFonts />
      <Router>
        <Routes>
          <Route path="/" element={<PagesWithNavigationBar />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/add-offer" element={<AddOfferPage />} />
            <Route path="/plants" element={<PlantsPage />} />
            <Route path="/plants/offer/:id" element={<Offer />} />
            <Route path="/" element={<UserProfileOrOffersNavigationBar />}>
              <Route path="/user/" element={<UserPage />} />
              <Route path="/user/your-offers" element={<YourOfferPage />} />
            </Route>
          </Route>
          <Route path="/" element={<LoginPagesWithNavigationBar />}>
            <Route path="/user/login" element={<LoginPage />} />
            <Route path="/user/sign-up" element={<SignUpPage />} />
            <Route
              path="/activation/:userId/:token"
              element={<AccountActivation />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<AdminPagesWithNavigationBar />}>
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/admin/users" element={<ManageUsersPage />} />
            <Route path="/" element={<AdminOffersCategoriesAndHeightsBar />}>
              <Route
                path="admin/offers/categories-and-heights"
                element={<CategoriesAndHeightsPage />}
              />
              <Route
                path="/admin/offers/users-offers"
                element={<AdminUsersOffersPage />}
              />
            </Route>
            <Route path="/admin/settings" element={<AdminSettings />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Router>
    </ThemeProvider>
  );

  function PagesWithNavigationBar() {
    return (
      <>
        <NavigationBar />
        <Outlet />
      </>
    );
  }

  function AdminPagesWithNavigationBar() {
    return (
      <>
        <AdminNavigationBar />
        <Outlet />
      </>
    );
  }

  function LoginPagesWithNavigationBar() {
    return (
      <>
        <LoginNavigationBar />
        <Outlet />
      </>
    );
  }

  function UserProfileOrOffersNavigationBar() {
    return (
      <>
        <ProfileAndYourOfferBar />
        <Outlet />
      </>
    );
  }

  function AdminOffersCategoriesAndHeightsBar() {
    return (
      <>
        <CategoriesAndHeightsBar />
        <Outlet />
      </>
    );
  }
}

export default App;
