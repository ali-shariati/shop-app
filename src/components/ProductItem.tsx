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
                    قیمت : <span>{price.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d])}</span> تومان
                </p>
            </div>
        </div>
    );
}

export default ProductItem