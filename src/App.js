// import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile  from './pages/Profile';
import AppContextProvider from './context/AppContextProvider';
import ModalContextProvider from './context/ModalContextProvider';
import Driver from './pages/Driver'
import OnBoarding from './pages/OnBoarding';



function App() {


  return (
    <AppContextProvider>
      <ModalContextProvider>
    <div className=" w-screen min-h-screen bg-black flex flex-col font-inter">

      <Routes>
        <Route path='/'element= {<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path ="/driver" element ={<Driver/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/onBoarding' element={<OnBoarding/>}/>
      </Routes>
    </div>    
    </ModalContextProvider>
    </AppContextProvider>
  );
}

export default App;
