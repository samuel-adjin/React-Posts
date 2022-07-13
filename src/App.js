import React from "react";
import Page from "./Pages/Page";
import Navbar from "./components/Navbar";
import Login from "./Auth/Login";
import Content from "./components/Content";
import Register from "./Auth/Register";
import DashSide from "./dashboard/DashSide";
import Dashboard from "./dashboard/Dashboard";
import Posts from "./dashboard/Posts";
import User from "./dashboard/User";
import Admin from "./dashboard/Admin";
import Profile from "./dashboard/Profile";
import { Routes, Route } from "react-router-dom";
import Reset from "./Auth/Reset";
import ResetMesssge from "./Auth/ResetMesssge";
import ResetPassword from "./Auth/ResetPassword";
import Nomatch from "./noMatch/Nomatch";
function App() {
  return (
    <Routes>
      <Route path="/" element={<DashSide />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="posts" element={<Posts />} />
        <Route path="user" element={<User />} />
        <Route path="admin" element={<Admin />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="reset-link" element={<Reset />} />
      <Route path="reset-success" element={<ResetMesssge />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="home" element={<Navbar />}>
        <Route index element={<Page />} />
        <Route path="page" element={<Page />} />
        <Route path="contents" element={<Content />} />
      </Route>
      <Route path="*" element={<Nomatch />} />
    </Routes>
  );
}

export default App;
