import Container from "@/components/Container";
import ProductItem from "@/components/ProductItem";
import Link from "next/link";
import { IProductList } from "@/types/products";
import Pagination from "@/components/pagination";

interface IStoreProps {
    params: Promise<{}>,
    searchParams: Promise<{page: string, per_page: string}>
}

async function Store({searchParams}: IStoreProps) {

    const page = (await searchParams).page ?? "1"
    const perPage = (await searchParams).per_page ?? "8"

    const result = await fetch(`http://localhost:7000/products?_page=${page}&_per_page=${perPage}`);
    const response = await result.json() as IProductList;
    // Assuming the response shape is { data: [...] }
    const productData = response.data;
    const totalPage = response.pages

    return (
        <Container>
            <div className='text-right py-4'>فروشگاه</div>
            <div className='grid grid-cols-4 gap-4 rtl'>
                {productData?.map((productItem) => (
                    <Link key={productItem.id} href={`/store/${productItem.id}`}>
                        <ProductItem {...productItem} />
                    </Link>
                ))}
            </div>
            <Pagination pageCount={totalPage} />
        </Container>
    );
}

export default Store;
