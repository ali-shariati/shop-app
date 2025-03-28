"use client"
import React, {createContext, useContext, useState} from "react";

type ShoppingContextProviderProps ={
    children : React.ReactNode
}

type CartItems={
    id: number,
    qty: number
}

type TShoppingCartContext ={
    cartItems: CartItems[],
    handelIncreaseProductQty: (id: number) => void
}

const ShoppingContext = createContext({} as TShoppingCartContext)

export const useShoppingCartContext= () => {
    return useContext(ShoppingContext)
}


function ShoppingContextProvider({children}: ShoppingContextProviderProps) {

    const [cartItems , setCartItems] = useState<CartItems[]>([])

    const handelIncreaseProductQty = (id: number) => {
        setCartItems(currentItem =>{
            let isNotProductExist = currentItem.find(item => item.id == id) == null
            if(isNotProductExist){
                return [...currentItem , {id , qty: 1}]
            }
            else {
                return currentItem.map(item => {
                    if (item.id == id) {
                        return {...item , qty: item.qty + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    return (
        <ShoppingContext.Provider value={{cartItems, handelIncreaseProductQty}}>
            {children}
        </ShoppingContext.Provider>
    );
}

export default ShoppingContextProvider