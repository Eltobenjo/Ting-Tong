import React, { useState, createContext,useEffect } from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [shoppingCart, setShoppingCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);


const addToShoppingCart = (dishUserClickedOn) => {
  const dishInQuestion = shoppingCart.find(
    (dish) => dish.id === dishUserClickedOn.dishId
  );
  if (dishInQuestion) {
    dishInQuestion.quantity += 1;
    const newShoppingCartState = shoppingCart.map((dish) =>
      dish.id == dishUserClickedOn.dishId ? dishInQuestion : dish
    );
    setShoppingCart();
  } else {
    setShoppingCart([...shoppingCart, dishUserClickedOn]);
  }
};

  useEffect(() => {
    let totalPrice = 0;
     shoppingCart.forEach(
       (dishInTheOrder) =>
         (totalPrice += dishInTheOrder.quantity * dishInTheOrder.price)
     );
    setTotalPrice(totalPrice);
  }, [shoppingCart]);
  return (
    
    
    <AppContext.Provider value={{shoppingCart, setShoppingCart,totalPrice, setTotalPrice}}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider