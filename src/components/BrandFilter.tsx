"use client"

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function BrandFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState("");

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const res = await fetch("http://localhost:7000/brands");
                if (!res.ok) {
                    throw new Error("خطا در دریافت برندها");
                }
                const data = await res.json();
                setBrands(data);
            } catch (error) {
                console.error("Error fetching brands:", error);
            }
        };

        fetchBrands();
    }, []);

    useEffect(() => {
        const currentSearchParams = new URLSearchParams(searchParams.toString());
        if (selectedBrand) {
            currentSearchParams.set("brand", selectedBrand);
        } else {
            currentSearchParams.delete("brand");
        }
        router.replace(`/store?${currentSearchParams.toString()}`);
    }, [selectedBrand]);

    const handleChange = (e) => {
        setSelectedBrand(e.target.value);
    };

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">برند محصولات</h2>
            <hr className="my-4" />
            <select
                value={selectedBrand}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md"
            >
                <option value="">همه برندها</option>
                {brands.map((brand) => (
                    <option key={brand.id} value={brand.name}>
                        {brand.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default BrandFilter;
