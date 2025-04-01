import {useEffect, useState} from "react";
import axios from "axios";
import AddToCart from "@/components/AddToCart";
import formatPrice from "@/utils/number";

interface ICartItemProps{
    id : number,
    qty : number,
}
interface ProductData{
    id: string,
    image: string,
    title: string,
    description: string,
    price: number,
}

function CartItem({id, qty}: ICartItemProps) {
    const [productData , setProductData] = useState<ProductData | null>(null)
    useEffect(() => {
        axios.get(`http://localhost:7000/products/${id}`).then(res => {
            const {data} = res
            setProductData(data)
        })
    }, []);
    return (
        <div className='bg-slate-50 mb-4 rounded-md'>
            <div className='grid grid-cols-12 '>
                <div className='col-span-2 '>
                    <img
                        className='h-[150px] w-[150px] '
                        src={productData?.image}
                        alt="محصول"
                    />
                </div>
                <div className='col-span-10 text-right mt-2'>
                    <h3 className='m-1'>نام محصول : {productData?.title}</h3>
                    <p className='m-1'><span>تعداد : </span><span>{qty.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d])}</span></p>
                    <p className='m-1'><span> قیمت محصول : </span><span> {formatPrice(productData?.price)} </span><span>تومان</span></p>
                    <AddToCart id={id.toString()}/>
                </div>
            </div>
        </div>
    )
}

export default CartItem