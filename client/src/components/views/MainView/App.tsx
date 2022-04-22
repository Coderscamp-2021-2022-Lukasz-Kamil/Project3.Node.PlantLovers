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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { NavigationBar } from "../NavigationBar/MainNavigationBar/NavigationBar";
import { AdminNavigationBar } from "../AdminPage/NavigationBar/AdminNavigationBar";
import AdminSettings from "../AdminPage/AdminSettings";
import { LoginNavigationBar } from "../NavigationBar/LoginNavigationBar/LoginNavigationBar";
import GlobalFonts from "../../../font/fonts";

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
            <Route path="/user" element={<UserPage />} />
            <Route path="/user/your-offers" element={<YourOfferPage />} />
          </Route>
          <Route path="/" element={<LoginPagesWithNavigationBar />}>
            <Route path="/user/login" element={<LoginPage />} />
            <Route path="/user/sign-up" element={<SignUpPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<AdminPagesWithNavigationBar />}>
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/admin/users" element={<AdminUsersPage />} />
            <Route
              path="admin/offers/categories-and-heights"
              element={<AdminCategoriesAndHeightsPage />}
            />
            <Route
              path="/admin/offers/users-offers"
              element={<AdminUsersOffersPage />}
            />
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
}

export default App;
