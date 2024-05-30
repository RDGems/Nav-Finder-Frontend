import { React, useState, useEffect } from "react";

import AppContext from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // check if user is logged in
    const fetchUser = async () => {
      try {
        if (!accessToken) {
          setAccessToken(localStorage.getItem("accessToken"));
        }
        if (!isLogin) {
          setIsLogin(localStorage.getItem("isLogin"));
        }
        // if (!currentUser) {
        //   setCurrentUser(localStorage.getItem("currentUser"));
        // }
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
        currentUser,
        setCurrentUser,
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
