"use client"

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function CategoryFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("http://localhost:7000/categories");
                if (!res.ok) {
                    throw new Error("خطا در دریافت دسته‌بندی‌ها");
                }
                const data = await res.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    // به‌روزرسانی URL هنگام تغییر انتخاب
    useEffect(() => {
        const currentSearchParams = new URLSearchParams(searchParams.toString());
        if (selectedCategory) {
            currentSearchParams.set("category", selectedCategory);
        } else {
            currentSearchParams.delete("category");
        }
        router.replace(`/store?${currentSearchParams.toString()}`);
    }, [selectedCategory]);

    const handleChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">دسته بندی محصولات</h2>
            <hr className="my-4" />
            <select
                value={selectedCategory}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md"
            >
                <option value="">همه دسته‌ها</option>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                        {cat.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CategoryFilter;
