import Container from "@/components/Container";
import {IProductItemProps} from "@/components/ProductItem";

interface IProductProps {
    params: Promise<{ id: string }>,
    searchParams : Promise<{}>
}

async function Product({params}: IProductProps) {

    const  {id} = await params
    const result = await fetch(`http://localhost:7000/product/${id}`)
    const data = (await result.json()) as IProductItemProps

    return (
        <Container>
            <div className='grid grid-cols-12  mt-8 shadow-md'>
                <div className='col-span-9 rtl text-right p-4'>
                    <h2 className='font-bold text-xl'>{data.title}</h2>
                    <p className='text-gray-600'>
                        {data.description}
                    </p>
                    <p className='font-bold'> قیمت : <span> {data.price}</span> تومان</p>
                    <div className='mt-4'>
                        <button className='px-4 py-2 rounded bg-gray-300'>+</button>
                        <span> 3 </span>
                        <button className='px-4 py-2 rounded bg-gray-300'>-</button>
                    </div>

                </div>
                <div className='col-span-3'>
                    <img
                        src={data.image}
                        alt=''
                        className='w-full h-64'
                    />
                </div>
            </div>
        </Container>
    );
};

export default Product