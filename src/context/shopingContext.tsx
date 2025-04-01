"use client"
import React, {createContext, useContext, useEffect, useState} from "react";

type ShoppingContextProviderProps ={
    children : React.ReactNode
}

type CartItems={
    id: number,
    qty: number
}

type TShoppingCartContext ={
    cartItems: CartItems[],
    handelIncreaseProductQty: (id: number) => void,
    handelDecreaseProductQty: (id: number) => void,
    handelRemoveProduct: (id: number) => void,
    getProductQty: (id: number) => number,
    getTotalQty: number
}

const ShoppingContext = createContext({} as TShoppingCartContext)

export const useShoppingCartContext= () => {
    return useContext(ShoppingContext)
}


function ShoppingContextProvider({children}: ShoppingContextProviderProps) {

    const [cartItems , setCartItems] = useState<CartItems[]>([])

    const getTotalQty = cartItems.reduce((totalQty, item)=>{
        return  totalQty + item.qty
    }, 0)

    const getProductQty = (id: number) => {
        return cartItems.find(item => item.id == id)?.qty || 0
    }

    const handelIncreaseProductQty = (id: number) => {
        setCartItems(currentItems =>{
            let isNotProductExist = currentItems.find(item => item.id == id) == null
            if(isNotProductExist){
                return [...currentItems , {id , qty: 1}]
            }
            else {
                return currentItems.map(item => {
                    if (item.id == id) {
                        return {...item , qty: item.qty + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const handelDecreaseProductQty = (id: number) =>{
        setCartItems(currentItems =>{
            let isLastOne = currentItems.find(item => item.id == id)?.qty == 1
            if(isLastOne){
                return currentItems.filter(item => item.id != id)
            }
            else {
                return currentItems.map(item => {
                    if (item.id == id) {
                        return {...item , qty: item.qty - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const handelRemoveProduct = (id: number) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id != id)
        })
    }

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems")
        if (cartItems) {
            setCartItems(JSON.parse(cartItems))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems" , JSON.stringify(cartItems))
    }, [cartItems]);

    return (
        <ShoppingContext.Provider value={
            {
                cartItems,
                handelIncreaseProductQty,
                handelDecreaseProductQty,
                getProductQty,
                getTotalQty,
                handelRemoveProduct
            }
        }>
            {children}
        </ShoppingContext.Provider>
    );
}

export default ShoppingContextProvider