import formatPrice from "@/utils/number";

export interface IProductItemProps {
    id: string,
    image: string,
    title: string,
    description: string,
    price: number,
}
async function ProductItem({image, title , price}: IProductItemProps) {



    return (
        <div className='shadow-md'>

            <img
                src={image}
            className='w-full h-64'
                alt='product'
            />
            <div className='p-4  text-right'>
                <h3 className='font-bold'>{title}</h3>
                <p>
                     <span>قیمت :</span>
                    <span>{formatPrice(price)}</span>
                    <span>  تومان</span>
                </p>
            </div>
        </div>
    );
}

export default ProductItem