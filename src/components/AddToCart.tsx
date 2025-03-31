"use client"
import { useShoppingCartContext } from "@/context/shopingContext";
import { RiDeleteBinLine } from "react-icons/ri";

interface IAddToCartProps {
    id: string
}

function AddToCart({ id }: IAddToCartProps) {
    const {
        cartItems,
        handelIncreaseProductQty,
        handelDecreaseProductQty,
        getProductQty,
        handelRemoveProduct
    } = useShoppingCartContext();

    console.log(cartItems);
    return (
        <div className="flex justify-between items-center mt-4 pb-2">
            <div className="flex items-center">
                <button
                    onClick={() => handelIncreaseProductQty(parseInt(id))}
                    className="px-4 py-2 rounded bg-gray-200">
                    +
                </button>
                <span className="mx-2">
          {getProductQty(parseInt(id))
              .toString()
              .replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d])}
        </span>
                <button
                    onClick={() => handelDecreaseProductQty(parseInt(id))}
                    className="px-4 py-2 rounded bg-gray-200">
                    -
                </button>
            </div>
            <button
                onClick={() => handelRemoveProduct(parseInt(id))}
                className="flex items-center px-4 py-2 rounded bg-gray-200 ml-2">
                <span>حذف از سبد</span>
                <RiDeleteBinLine className="mr-2 h-8" />
            </button>
        </div>
    );
}

export default AddToCart;
