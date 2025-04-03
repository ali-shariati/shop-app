import Container from "@/components/Container";
import ProductItem from "@/components/ProductItem";
import Link from "next/link";
import { IProductList } from "@/types/products";
import Pagination from "@/components/pagination";
import Search from "@/components/Search";
import CategoryFilter from "@/components/CategoryFilter";
import BrandFilter from "@/components/BrandFilter";

interface IStoreProps {
    params: Promise<{}>,
    searchParams: Promise<{page: string, per_page: string, title: string, category: string, brand: string}>
}

async function Store({ searchParams }: IStoreProps) {
    const page = (await searchParams).page ?? "1";
    const perPage = (await searchParams).per_page ?? "8";
    const title = (await searchParams).title ?? "";
    const category = (await searchParams).category ?? "";
    const brand = (await searchParams).brand ?? "";

    const result = await fetch(`http://localhost:7000/products?_page=${page}&_per_page=${perPage}&title=${title}&category=${category}&brand=${brand}`);
    const response = await result.json() as IProductList;

    const productData = response.data;
    const totalPage = response.pages;

    return (
        <Container>
            <div className="flex flex-col md:flex-row gap-8 mt-6">
                {/*  Sidebar */}
                <aside className="w-full md:w-1/4 p-4 bg-white border-l border-gray-200">
                    <div className="mb-4"> <Search /></div>
                    <div className="mb-4"><CategoryFilter /></div>
                    <div className="mb-4"><BrandFilter /></div>
                </aside>
                {/* main */}
                <main className="w-full md:w-3/4">
                    <header className="mb-6">
                        <h1 className="text-2xl font-semibold text-gray-800 text-right">فروشگاه</h1>
                    </header>
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {productData?.map((productItem) => (
                            <Link
                                key={productItem.id}
                                href={`/store/${productItem.id}`}
                                className="block hover:shadow-lg transition-shadow"
                            >
                                <ProductItem {...productItem} />
                            </Link>

                        ))}
                    </section>
                    <div className="mt-8 flex justify-center">
                        <Pagination pageCount={totalPage} />
                    </div>
                </main>
            </div>
        </Container>
    );
}

export default Store;
