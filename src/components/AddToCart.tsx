"use client"
import {useShoppingCartContext} from "@/context/shopingContext";
import { RiDeleteBinLine } from "react-icons/ri";

interface IAddToCartProps {
    id: string
}
function AddToCart({id}: IAddToCartProps) {

    const{cartItems, handelIncreaseProductQty,handelDecreaseProductQty, getProductQty, handelRemoveProduct} = useShoppingCartContext()

    console.log(cartItems)
    return (
        <div className='mt-4'>
            <div>
                <button onClick={() => handelIncreaseProductQty(parseInt(id))}
                        className='px-4 py-2 rounded bg-gray-200'>+
                </button>
                <span
                    className='m-2'> {getProductQty(parseInt(id)).toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d])} </span>
                <button onClick={() => handelDecreaseProductQty(parseInt(id))}
                        className='px-4 py-2 rounded bg-gray-200'>-
                </button>
            </div>
            <div></div>
            <div className='flex mt-4'>
                <button onClick={()=> handelRemoveProduct(parseInt(id))} className='flex items-center px-4 py-2 rounded bg-gray-200 mt-4'>
                    <span>حذف از سبد</span>
                    <RiDeleteBinLine className='mr-2 h-8' />
                </button>
            </div>

        </div>
    );
}

export default AddToCart