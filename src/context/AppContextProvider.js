import {React,useState} from 'react';

import AppContext from './AppContext';

const AppContextProvider = ({children})=>{
    const [isLogin,setIsLogin] = useState(false);
    // const[baseUrl,setBaseUrl] = useState("https://localhost:8000/api/v1");
    // const baseUrl = "https://localhost:8000/api/v1";
    const[currentUser,setCurrentUser] = useState(null);

    return(
        <AppContext.Provider value={{isLogin,setIsLogin,currentUser,setCurrentUser}}>
            {children}
        </AppContext.Provider>
    )

}

    export default AppContextProvider;