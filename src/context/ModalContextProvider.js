import {React,useState} from 'react';

import ModalContext from './ModalContext';

const ModalContextProvider = ({children})=>{
    
    const[openLogoutModal,setOpenLogoutModal] = useState(false);
    const[openOnBoardingModal,setOpenOnBoardingModal] = useState(false);


    return(
        <ModalContext.Provider value={{openLogoutModal,setOpenLogoutModal,openOnBoardingModal,setOpenOnBoardingModal}}>
            {children}
        </ModalContext.Provider>
    )

}

    export default ModalContextProvider;