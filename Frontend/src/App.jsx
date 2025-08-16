import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import SettingsPage from "./pages/SettingsPage";
import SignUpPage from "./pages/SignUppage";
import LogInPage from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";
import HomePage from "./pages/homePage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/setting" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
