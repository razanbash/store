import React,{createContext,useContext, useState} from "react";
const Razan = createContext();

export const Provider =({children})=> {

    const [show ,setShow]= useState(true);
    const changeShow =()=>{
        setShow(!show) 
    };
return (
    <Razan.Provider value={{ changeShow, show }}>
        {children}
    </Razan.Provider>
    );

}
    export const useGlobalContext =()=>{
        return useContext(Razan)
    }
    


