import { React, useState,useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import useApi from "../utils/services/ApiServices";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import toast from "react-hot-toast";



const UserForm = ({formFor}) => {
  const { accessToken } = useContext(AppContext);
  const navigate = useNavigate();
  const[loading, setLoading] = useState(true);
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin") ;
    if (!isLogin) {
      toast.error("Please Login First!");
      navigate("/login");
    }
  },[])
  const[lookups, setLookup] = useState()
  
  useEffect( () => {
    setLoading(true);
    const lookupData = async()=>{
      const url = 'lookups'
      const result = await post(url,
        {"lookups":["genders"]}
      )
      setLookup(result.data)
     console.log(result.data.genders)
    }
    lookupData()
    setLoading(false);
  },[])
  
 
  
  const { post,put } = useApi();
  const [userFormData, setUserFormData] = useState({
    file:undefined,
    firstName: "",
    lastName: "",
    mobile: undefined,
    address: {
      landmark: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    dob: undefined,
    gender: "",
    AccountStatus: "Active",
    securityQuestions: {
      question1: "What is your birth place?",
      answer1: "",
    },
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    landmark: "",
    street: "",
    city: "",
    state: "Uttar pradesh",
    postalCode: "",
    country: "India",
    dob: 11 - 10 - 2000,
    gender: "Male",
    answer1: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    

  };

  const handleDataFormat = () => {
    userFormData.firstName = formData.firstName;
    userFormData.lastName = formData.lastName;
    userFormData.mobile = Number(formData.mobile);
    userFormData.dob = formData.dob;
    userFormData.gender = formData.gender;
    userFormData.securityQuestions.answer1 = formData.answer1;
    userFormData.address.landmark = formData.landmark;
    userFormData.address.street = formData.street;
    userFormData.address.city = formData.city;
    userFormData.address.state = formData.state;
    userFormData.address.postalCode = formData.postalCode;
    userFormData.address.country = formData.country;
  };




  const handleSubmit = async(event) => {
    event.preventDefault();
    handleDataFormat();
    // console.log(userFormData);
    if(formFor==='updateDetail'){
      const url = "auth/editAccount";
    try {
      
    const response = await put(url, userFormData,{
        'Content-Type': 'multipart/form-data',
        'Authorization':`Bearer ${accessToken}`
    });
    // console.log(response);
    toast.success("Updated Successful");
    navigate("/profile");
    } catch (error) {
      toast.error(error.response.data.message);
    }
    }
    else{
      const url = "/auth/OnBoarding";
    try {
      
    const response = await post(url, userFormData,{
        'Content-Type': 'multipart/form-data',
        'Authorization':`Bearer ${accessToken}`
    });
    // console.log(response);
    toast.success("Updated Successful");
    navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
    }
  };


  const handleFileUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    userFormData.file = file;
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto flex flex-col w-[50%]   border-2 border-neutral-600  items-center justify-between mt-[4%] max-w-md   rounded-none md:rounded-2xl p-4 md:p-8  bg-black shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
        <h2 className="font-bold text-xl text-neutral-200 ">{(formFor==='updateDetail')?'Update Details':'User Details'}</h2>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                First Name
              </label>
              <input
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
                         focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
                         disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Last Name
              </label>
              <input
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
                         focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
                         disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Mobile No.
              </label>
              <input
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Gender
              </label>
              <select
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Gender"
                type="text"
              >
                {
                  loading ? (<></>):( lookups && lookups.genders.map(gender =>{
                    return (<option key={gender.key} value={gender.key}>{gender.value}</option>)}
                  ))
                }
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Date of Birth
              </label>
              <input
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder=""
                type="date"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Upload Profile
              </label>
              <input
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="file"
                name="file"
                onChange={handleFileUpload}
                type="file"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Security Question
              </label>
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                What is your birth place?
              </label>

              <input
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="answer1"
                name="answer1"
                value={formData.answer1}
                onChange={handleChange}
                placeholder=""
                type="text"
              />
            </div>
          </div>
          <h2 className="font-bold text-xl text-neutral-200 ">Address</h2>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Landmark
              </label>
              <input
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="landmark"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                placeholder=""
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Street
              </label>
              <input
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                placeholder=""
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                City
              </label>
              <input
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder=""
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                State
              </label>
              <select
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder=""
                type="text"
              >
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Postal Code
              </label>
              <input
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder=""
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Country
              </label>
              <select
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder=""
                type="text"
              >
                <option value="India">India</option>
              </select>
            </div>
          </div>

          <button
            className=" mt-10 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900
           to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium 
           shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
           dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            {(formFor==='updateDetail')?'Update ':'OnBoard'} &rarr;
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
