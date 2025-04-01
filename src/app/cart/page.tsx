"use client"
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import {useShoppingCartContext} from "@/context/shopingContext";
import {useEffect, useState} from "react";
import axios from "axios";
import formatPrice from "@/utils/number";
import {IProductItemProps} from "@/types/products";

interface IDiscountData {
    id: number,
    code: string,
    percent: number
}
function Cart (){

    const {cartItems} = useShoppingCartContext()
    const [productData , setProductData] = useState<IProductItemProps[]>([])
    const [discountCode, setDiscountCode] = useState('');
    const [finalPrice, setFinalPrice] = useState(0)
    const [discountPrice, setDiscountPrice] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:7000/products`).then(res => {
            const {data} = res
            setProductData(data)
        })
    }, []);

    let totalPrice = cartItems.reduce((total, item) => {
        const selectedProduct = productData.find(
            (product) => product.id === item.id.toString()
        );
        return total + item.qty * (selectedProduct?.price || 0);
    }, 0)

    const handelSubmitDiscount = ()=>{
        axios.get(`http://localhost:7000/discounts?code=${discountCode}`).then(res => {
            console.log(res)
            const data = res.data as IDiscountData[]
            let discountPrice = totalPrice * data[0].percent / 100
            let finalPrice = totalPrice - discountPrice

            setDiscountPrice(discountPrice)
            setFinalPrice(finalPrice)
        })
    }
    return (
        <Container>
            <h1 className='my-4 p-4'>سبد خرید</h1>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-9'>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <CartItem {...item} />
                        </div>
                    ))}
                </div>
                <div className=' col-span-3 border border-gray-200 shadow-lg shadow-gray-100 p-4 rounded-md'>
                    <p className='m-2'>
                        <span> قیمت کل : </span>
                        <span>
                          {formatPrice(totalPrice)}
                        </span>
                        <span className='ml-2'> تومان </span>

                    </p>
                    <p className='m-2'><span> سود شما از این خرید : </span><span> {formatPrice(discountPrice)} </span><span>تومان</span></p>
                    <p className='m-2'><span> قیمت نهایی : </span><span>  {formatPrice(finalPrice)}</span><span>تومان</span></p>

                    <div>
                        <input
                            type='text'
                            placeholder='کد تخفیف را وارد کنید'
                            className='border border-gray-200 w-full h-12 rounded-md p-2'
                            onChange={(e)=>setDiscountCode(e.target.value)}
                        />
                        <button className='px-4 py-2 rounded bg-gray-300 mt-4' onClick={handelSubmitDiscount}>اعمال تخفیف</button>
                    </div>

                </div>
            </div>


        </Container>

    );
}

export default Cart