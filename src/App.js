// import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile  from './pages/Profile';
import AppContextProvider from './context/AppContextProvider';
import Driver from './pages/Driver';
import Ride from './pages/Ride';

import ChangePassword from './pages/ChangePassword';
import VerifyEmail from './pages/VerifyEmail';
import VerifyOtp from './pages/VerifyOtp';
import CancelRide from './pages/CancelRide';
import RideBooked from './pages/RideBooked';
// import Driver from './pages/Driver'
import ResetPassword from './pages/ResetPassword';
import UserForm from './pages/UserForm';
import ModalContextProvider from './context/ModalContextProvider';
import DriverForm from './pages/DriverForm';
import DriverLicense from './components/driverDetails/DriverLicense';
import ProfilePhoto from './components/driverDetails/ProfilePhoto';
import AadharCard from './components/driverDetails/AadharCard';
import PanCard from './components/driverDetails/PanCard';
import VehicleInsurance from './components/driverDetails/VehicleInsurance';
import VehiclePermit from './components/driverDetails/VehiclePermit';




function App() {


  return (
    <AppContextProvider>
      <ModalContextProvider>
    <div className=" w-screen min-h-screen bg-black flex flex-col font-inter">

      <Routes>
        <Route path='/'element= {<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>

        <Route path ="/Ride" element ={<Ride/>}/>
        <Route path ="/driver" element ={<Driver/>}/>

        <Route path ="/driverForm" element ={<DriverForm/>}/>
        <Route path ="/DriverLicense" element ={<DriverLicense/>}/>
        <Route path ="/ProfilePhoto" element ={<ProfilePhoto/>}/>
        <Route path ="/AadharCard" element ={<AadharCard/>}/>
        <Route path ="/PanCard" element ={<PanCard/>}/>
        <Route path ="/VehicleInsurance" element ={<VehicleInsurance/>}/>
        <Route path ="/VehiclePermit" element ={<VehiclePermit/>}/>

        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/onBoarding' element={<UserForm />}/>
        <Route path='/changePassword' element={<ChangePassword/>}/>
        <Route path='/resetPassword' element={<ResetPassword/>}/>
        <Route path='/verifyEmail' element={<VerifyEmail/>}/>
        <Route path='/verifyOtp' element={<VerifyOtp/>}/>
        <Route path='/updateUser' element={<UserForm formFor={'updateDetail'}/>}/>
        <Route path='/cancelRide' element={<CancelRide />}/>
        <Route path='/RideBooked' element={<RideBooked />}/>


      </Routes>
    </div>    
    </ModalContextProvider>
    </AppContextProvider>
  );
}

export default App;
