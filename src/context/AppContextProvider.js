import {React,useState} from 'react';

import AppContext from './AppContext';

const AppContextProvider = ({children})=>{
    const [isLogin,setIsLogin] = useState(false);
    const[openLogoutModal,setOpenLogoutModal] = useState(false);
    const[accessToken,setAccessToken] = useState(null);
    const[currentUser,setCurrentUser] = useState(null);
    const[emailForOtp,setEmailForOtp] = useState(null);

    return(
        <AppContext.Provider value={{isLogin,setIsLogin,currentUser,emailForOtp,setEmailForOtp,setCurrentUser,accessToken,setAccessToken,openLogoutModal,setOpenLogoutModal}}>
            {children}
        </AppContext.Provider>
    )

}

    export default AppContextProvider;