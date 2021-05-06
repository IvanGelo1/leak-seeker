import React, { useState, useContext } from "react";

const ShowWelcomePageContext = React.createContext();
const SwapPageContext = React.createContext();



// CUSTOM HOOKS
export function useWelcomePageContext() {
  return useContext(ShowWelcomePageContext);
}

export function useSwapPageContext() {
  return useContext(SwapPageContext);
}





export function ShowWelcomePageProvider({ children }) {

  const [welcomeState, setWelcomeState] = useState(true);

  function swapPageFunction() {
    setWelcomeState(false);
  }

  return (
    <ShowWelcomePageContext.Provider value={welcomeState}>
      <SwapPageContext.Provider value={swapPageFunction}>
        {children}
      </SwapPageContext.Provider>
    </ShowWelcomePageContext.Provider>
  );
}
