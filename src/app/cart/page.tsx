"use client"
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import {useShoppingCartContext} from "@/context/shopingContext";

function Cart (){
    const {cartItems} = useShoppingCartContext()

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
                    <p className='m-2'><span> قیمت کل : </span><span> ۱۰۰۰ </span><span>تومان</span></p>
                    <p className='m-2'><span> سود شما از این خرید : </span><span> ۱۰۰۰ </span><span>تومان</span></p>
                    <p className='m-2'><span> قیمت نهایی : </span><span> ۱۰۰۰ </span><span>تومان</span></p>
                    <div>
                        <input
                            type='text'
                            placeholder='کد تخفیف را وارد کنید'
                               className='border border-gray-200 w-full h-12 rounded-md p-2'
                        />
                        <button className='px-4 py-2 rounded bg-gray-300 mt-4'>اعمال تخفیف</button>
                    </div>

                </div>
            </div>


        </Container>

    );
}

export default Cart