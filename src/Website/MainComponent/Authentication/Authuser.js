import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Authuser = () => {


  const navigate =useNavigate();
  const getToken = () => {

    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };
  const getUser = () => {
    const userString = JSON.parse(sessionStorage.getItem("user"));

    return userString;
  };
  const SaveToken = (user, token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("user", JSON.stringify(user));
  };
  const [token, setToken] = useState(getToken());
  // console.log(token);

  const [user, setuser] = useState(getUser());


  const http = axios.create({
    baseURL: "https://vsmart.ajspire.com/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

  });
  const logout = () => {
    sessionStorage.clear();
    setToken(null);
    setuser(null);
    navigate("/");
  }

  return {
    setToken: SaveToken,
    http,
    user,
    token,
    logout
  };

}

export default Authuser
