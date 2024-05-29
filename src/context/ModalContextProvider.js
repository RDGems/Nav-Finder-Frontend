import {React,useState} from 'react';

import ModalContext from './ModalContext';

const ModalContextProvider = ({children})=>{
    
    
    const[openOnBoardingModal,setOpenOnBoardingModal] = useState(false);


    return(
        <ModalContext.Provider value={{openOnBoardingModal,setOpenOnBoardingModal}}>
            {children}
        </ModalContext.Provider>
    )

}

    export default ModalContextProvider;