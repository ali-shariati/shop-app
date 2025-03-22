function CartItem(){
    return (
        <div className='bg-slate-50 mb-4 rounded-md'>
            <div className='grid grid-cols-12 '>
                <div className='col-span-2'>
                    <img
                        className='h-[150px] w-[150px] '
                        src="https://www.nickfordphotography.co.uk/wp-content/uploads/2022/06/NFP_FS15-1024x683.jpg.webp"
                        alt="محصول"
                    />
                </div>
                <div className='col-span-10 text-right'>
                    <h3 className='m-1'>نام محصول : </h3>
                    <p className='m-1'><span>تعداد : </span><span>۳</span></p>
                    <p className='m-1'><span> قیمت محصول : </span><span> ۱۰۰۰ </span><span>تومان</span></p>
                    <div className='mt-4'>
                        <button className='px-4 py-2 rounded bg-gray-200'>+</button>
                        <span className='m-2'> 3 </span>
                        <button className='px-4 py-2 rounded bg-gray-200'>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem