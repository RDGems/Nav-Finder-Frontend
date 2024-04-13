// import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <div className=" w-screen min-h-screen bg-black flex flex-col font-inter">
      Home
      <Routes>
        <Route path='/'element= {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
