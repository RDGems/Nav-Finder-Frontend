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

function App() {

  
  return (
    <AppContextProvider>
    <div className=" w-screen min-h-screen bg-black flex flex-col font-inter">
      
      <Routes>
        <Route path='/'element= {<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path ="/driver" element ={<Driver/>}/>
        <Route path ="/Ride" element ={<Ride/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </div>
    </AppContextProvider>
  );
}

export default App;
