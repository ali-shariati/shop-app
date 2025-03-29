"use client"
import {useShoppingCartContext} from "@/context/shopingContext";


interface IAddToCartProps {
    id: string
}
function AddToCart({id}: IAddToCartProps) {

    const{cartItems, handelIncreaseProductQty,handelDecreaseProductQty, getProductQty} = useShoppingCartContext()

    console.log(cartItems)
    return (
        <div className='mt-4'>
            <button onClick={()=> handelIncreaseProductQty(parseInt(id))} className='px-4 py-2 rounded bg-gray-200'>+</button>
            <span className='m-2'> {getProductQty(parseInt(id)).toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d])} </span>
            <button onClick={()=> handelDecreaseProductQty(parseInt(id))} className='px-4 py-2 rounded bg-gray-200'>-</button>
        </div>
    );
}

export default AddToCart