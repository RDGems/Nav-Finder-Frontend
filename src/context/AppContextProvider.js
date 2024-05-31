import { React, useState, useEffect } from "react";

import AppContext from "./AppContext";
import useApi from "../utils/services/ApiServices";

const AppContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const { get } = useApi();
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
       if(!currentUser && isLogin){
        const url = '/auth/getCurrentUser'
        const result = await get(url,{},{
          
            Authorization: `Bearer ${accessToken}`,
        
        });
        setCurrentUser(result.data)
        localStorage.setItem("currentUser", result.data.AccountStatus)
        }
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
