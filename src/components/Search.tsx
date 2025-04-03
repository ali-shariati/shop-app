"use client"

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";

function Search() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        const currentSearchParams = new URLSearchParams(searchParams.toString());
        currentSearchParams.set("title", search);
        router.push(`/store?${currentSearchParams.toString()}`);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="relative w-full">
            <input
                type="text"
                placeholder="جستجو"
                className="border w-full border-col-gray-300 p-2 rounded-md pr-10"
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
                <FaSearch size={20} />
            </button>
        </div>
    );
}

export default Search;
