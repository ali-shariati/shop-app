"use client"
import React, {createContext, useState} from "react";

type ShoppingContextProviderProps ={
    children : React.ReactNode
}

type CartItems={
    id: number,
    qty: number
}

const ShoppingContext = createContext({})



function ShoppingContextProvider({children}: ShoppingContextProviderProps) {

    const [cartItems , setCartItems] = useState<CartItems[]>([])
    return (
        <ShoppingContext.Provider value={{cartItems}}>
            {children}
        </ShoppingContext.Provider>
    );
}

export default ShoppingContextProvider