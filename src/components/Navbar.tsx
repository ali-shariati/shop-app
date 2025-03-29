"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import Container from "@/components/Container";
import {useShoppingCartContext} from "@/context/shopingContext";

export default function Navbar() {

    const pathName = usePathname()

    const {getTotalQty} = useShoppingCartContext()

    const navLinks = [
        {
            name: 'خانه ',
            href: '/'
        },
        {
            name: 'فروشگاه',
            href: '/store'
        }
    ]
    return (
        <nav className='shadow p-4'>
            <Container>
                <div className='flex justify-between'>

                    <div>
                        {navLinks.map((link) =>
                            <Link className={`mr-4 ${pathName === link.href && 'font-bold text-sky-600'}`} href={link.href} key={link.href}>{link.name}</Link>
                        )}
                    </div>
                    <div>
                        <span className='px-2  bg-red-500 text-white rounded-full ml-2 font-iran'>
                           {getTotalQty.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d])}

                        </span>
                        <Link href={'/cart'}>سبد خرید</Link>
                    </div>

                </div>
            </Container>
        </nav>
    );
}
