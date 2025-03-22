import Container from "@/components/Container";
// import Image from "next/image";
import ProductItem, {IProductItemProps} from "@/components/ProductItem";
import Link from "next/link";

async function Store() {

    const result = await fetch("http://localhost:7000/product")
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
