import formatPrice from "@/utils/number";
import {IProductItemProps} from "@/types/products";


async function ProductItem({image, title , price}: IProductItemProps) {



    return (
        <div className='shadow-md'>

            <img
                src={image}
            className='w-full h-64'
                alt='product'
            />
            <div className='p-4 text-right  '>
                <h3 className='font-bold mb-2'>{title}</h3>
                <p>
                    <span className='ml-2'>قیمت :</span>
                    <span>{formatPrice(price)}</span>
                    <span className='mr-2'>  تومان</span>
                </p>
            </div>
        </div>
    );
}

export default ProductItem