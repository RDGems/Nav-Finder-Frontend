import React from "react";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import useApi from "../../utils/services/ApiServices";

export const LogoutModal = ({ setOpen }) => {
  const { post } = useApi();

  const { setIsLogin, setAccessToken } = useContext(AppContext);
  const logoutHandler = async (event) => {
    event.preventDefault();
    setIsLogin(false);
    setAccessToken("");
    setOpen(false);
    const url = "/auth/logout";

    const response = await post(url);
    console.log(response);
  };
  return (
    <div className="flex flex-col w-[30vw] mx-auto justify-center items-center  ">
      <h1 className="text-black mt-8 mb-8  font-bold text-3xl">
        Are You Sure?
      </h1>
      <div>
        <button
          onClick={logoutHandler}
          className="btn text-white text-bold text-center bg-black rounded-lg  py-2   text-xl w-20 hover:bg-gray-600 hover:text-black  "
        >
          Logout
        </button>
      </div>
    </div>
  );
};
