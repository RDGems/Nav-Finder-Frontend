import React, { useState } from "react";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const TimeLine = () => {
  const { isLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const [routeDest, setRouteDest] = useState({
    from: "",
    to: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setRouteDest({
      ...routeDest,
      [event.target.name]: event.target.value,
    });
    
  };

  const searchHandler = (event) => {
    event.preventDefault();
    if (isLogin) {
      console.log(routeDest);
      navigate("/ride", {
        state: {
          from: routeDest.from,
          to: routeDest.to,
        },
      });
    } else {
      toast.error("Please Login First!");
      navigate("");
    }
  };

  return (
    <div>
      <div className=" h-[80%] bg-white mx-[10%] rounded-md">
        <div className=" h-48">
          <div className=" h-full flex items-center justify-center">
            {/* <img src='https://images.unsplash.com/photo-1616910111011-888888888888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='' /> */}
            <div className="ml-4 mt-24 flex flex-row gap-10 ">
              <div className="">
                <form  onSubmit={searchHandler} className="flex gap-10">
                  <input
                    type="text"
                    id="from"
                    name="from"
                    value={routeDest.from}
                    onChange={handleChange}
                    className=" w-72 border-2 border-gray-300 rounded-md px-2 py-1"
                    placeholder="From"
                  />
                  <p className=" font-semibold text-2xl ">To</p>
                  <input
                    id="to"
                    name="to"
                    value={routeDest.to}
                    onChange={handleChange}
                    type="text"
                    className=" w-72 border-2 border-gray-300 rounded-md px-2 py-1"
                    placeholder="Destination"
                  />
                  <button
                   
                    className="bg-slate-800 p-2  hover:bg-black  text-white rounded-md px-2 py-1"
                  >
                    Search{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
