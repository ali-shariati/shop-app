import Container from "@/components/Container";
import formatPrice from "@/utils/number";
import AddToCart from "@/components/AddToCart";

export default async function ProductPage({ params }) {
    const { id } = params;
    const res = await fetch(`http://localhost:7000/products/${id}`);
    const product = await res.json();

    return (
        <Container>
            <div className="grid grid-cols-12 gap-4 my-8">

                <div className="col-span-3 p-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-80 object-cover rounded"
                    />

                    <div className="flex justify-center space-x-2 mt-4 p-4">
                        <img
                            src={product.image}
                            alt="تصویر کوچک ۱"
                            className="w-16 h-16 object-cover border rounded"
                        />
                        <img
                            src={product.image}
                            alt="تصویر کوچک ۲"
                            className="w-16 h-16 object-cover border rounded"
                        />
                        <img
                            src={product.image}
                            alt="تصویر کوچک ۳"
                            className="w-16 h-16 object-cover border rounded"
                        />
                    </div>
                </div>


                <div className="col-span-7  p-4 flex flex-col">
                    <h1 className="text-2xl font-bold mb-4 text-center">
                        {product.title}
                    </h1>
                    <p className="text-gray-700 mb-4 text-justify">
                        {product.description}
                    </p>
                    <div className="border-t pt-4 mt-auto">
                        <h2 className="text-xl font-semibold">توضیحات تکمیلی</h2>
                        <p className="text-gray-700">
                            در این بخش توضیحات جامع محصول، شامل مواد سازنده، کاربردها و نکات
                            فنی نمایش داده می‌شود.
                        </p>
                    </div>
                </div>


                <div className="col-span-2 border shadow rounded p-4 flex flex-col justify-between bg-gray-50 w-[320px]">
                    <div>
                        <p className="text-lg font-bold text-center">قیمت</p>
                        <p className="text-2xl font-bold text-red-500 text-center">
                            {formatPrice(product.price)} تومان
                        </p>
                        <p className="text-sm text-center text-gray-500 mt-2">
                            موجود در انبار
                        </p>
                    </div>
                    <div className="mt-4">
                        <AddToCart id={product.id} />
                    </div>
                </div>
            </div>
        </Container>
    );
}
