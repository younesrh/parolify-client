import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("auth-token")) || null
  );
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (token) {
      Axios.get(`${process.env.REACT_APP_SERVER_URL}/api/auth`, {
        headers: {
          "auth-token": token,
        },
      }).then((res) => {
        setCurrentUser(res.data);
        console.log(currentUser);
      });
    }
  }, [token]);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
