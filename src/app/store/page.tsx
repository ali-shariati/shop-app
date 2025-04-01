import Container from "@/components/Container";
// import Image from "next/image";
import ProductItem from "@/components/ProductItem";
import Link from "next/link";
import {IProductItemProps} from "@/types/products";

async function Store() {

    const result = await fetch("http://localhost:7000/products?_page=1&_per_page=5")
    const data = (await result.json()) as IProductItemProps[]

    return (
        <Container>
            <div className='text-right py-4'>فروشگاه</div>
            <div className='grid grid-cols-4 gap-4 rtl'>
                {
                    data.map((item) =>(
                        <Link key={item.id} href={`/store/${item.id}`}>
                        <ProductItem {...item}/>
                        </Link>
                    ))
                }

            </div>
        </Container>
    );
}
export default Store
