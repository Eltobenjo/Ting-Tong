import React, { useState, createContext } from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [shoppingCart, setShoppingCart] = useState([])

  return (
    <AppContext.Provider value={{shoppingCart, setShoppingCart}}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider