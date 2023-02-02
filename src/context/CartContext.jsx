import { createContext, useContext, useState } from "react";

 const CartContext = createContext( [] )

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([])

  const addCart = (product) => {
    const idx = cartList.findIndex(prod => prod.id === product.id)
   
   if(idx !== -1){
    cartList[idx].cant += product.cant
    setCartList( [ ...cartList ] )
   }else {
      setCartList([...cartList, product])
   }

  }

  const totalPrice = () => cartList.reduce((contador, prod) => contador += (prod.precio * prod.cant) , 0)

  const totalQuantity = () => cartList.reduce((contador, producto) => contador += producto.cant , 0)

  const emptyCart = () => {
    setCartList([])

  }
  
  const itemDelet = (id) =>  {
    setCartList( cartList.filter(prod => prod.id !== id ) )
}

function cleanList() {
  setProducts([]);
}

  return (
    <CartContext.Provider value={{
      cartList,
      addCart,
      quantity: cartList.length,
      cleanList,
      emptyCart,
      totalPrice,
      totalQuantity,
      itemDelet
    }}>
      { children }
    </CartContext.Provider>
  )
}