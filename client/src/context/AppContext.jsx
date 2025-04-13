// import React,{ createContext } from "react";


// export const AppContext =createContext()

// export const AppContextProvider=(props)=>{
//     return(
//         <AppContext.Provider value={value}>
//             {props.children}
//         </AppContext.Provider>
//     )
// }


import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const value = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
