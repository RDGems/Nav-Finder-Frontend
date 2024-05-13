import {React,useState} from 'react';

import AppContext from './AppContext';

const AppContextProvider = ({children})=>{
    const [isLogin,setIsLogin] = useState(false);
    const[openLogoutModal,setOpenLogoutModal] = useState(false);
    const[accessToken,setAccessToken] = useState(null);
    const[currentUser,setCurrentUser] = useState(null);

    return(
        <AppContext.Provider value={{isLogin,setIsLogin,currentUser,setCurrentUser,accessToken,setAccessToken,openLogoutModal,setOpenLogoutModal}}>
            {children}
        </AppContext.Provider>
    )

}

    export default AppContextProvider;