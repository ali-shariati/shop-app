"use client"
import ReactPaginate from "react-paginate";
import {useRouter, useSearchParams} from "next/navigation";

function Pagination({pageCount}:{pageCount: number} ){
    const  searchParams = useSearchParams();
    const router = useRouter()
    const handlePageClick = (e: { selected: number }) => {
        const page= e.selected + 1
        const currentSearchParams = new URLSearchParams(searchParams.toString());
        currentSearchParams.set("page", page.toString())
        currentSearchParams.set("per_page", "8")

        router.push(`/store?${currentSearchParams.toString()}`)
    }
    return(
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="بعدی >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< قبلی"
                renderOnZeroPageCount={null}
                className='flex justify-center mt-4 p-2 space-x-4 rtl'
                previousClassName="ml-4"
            />

        </div>
    )
 }

 export default Pagination