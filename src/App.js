// import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile  from './pages/Profile';
<<<<<<< HEAD
import AppContextProvider from './context/AppContextProvider';


=======
import Driver from './pages/Driver';
>>>>>>> 95ee260d9861e1ccf0433e685b4273f3dcbe276f

function App() {

  
  return (
    <AppContextProvider>
    <div className=" w-screen min-h-screen bg-black flex flex-col font-inter">
      
      <Routes>
        <Route path='/'element= {<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path ="/driver" element ={<Driver/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </div>
    </AppContextProvider>
  );
}

export default App;
