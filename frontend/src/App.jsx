import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import BlogPage from "./pages/BlogPage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import PackegePage from "./pages/PackegePage";
import LogoutPage from "./pages/LogoutPage";
import NotesPage from "./pages/NotesPage";
import ExplorePage from "./pages/ExplorePage";
import Code_Editor from "./pages/editor/Code_Editor";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import RefundPolicy from "./pages/RefundPolicy";
import TermCondition from "./pages/Term_Condition";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import AdminLayout from "./components/layouts/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import AdminService from "./pages/AdminService";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/package" element={<PackegePage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/forgotpassword/resetpassword" element={<ResetPassword />} />
          <Route path="/editor/happy_editor" element={<Code_Editor />} />
          <Route path="/footer/refundPolicy" element={<RefundPolicy />} />
          <Route path="/footer/termCondition" element={<TermCondition />} />
          <Route path="/footer/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<ErrorPage />} />
          // NESTED ROUTE
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="services" element={<AdminService />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
