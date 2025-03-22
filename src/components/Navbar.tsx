"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import Container from "@/components/Container";

export default function Navbar() {

    const pathName = usePathname()
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
                        <Link href={'/cart'}>سبد خرید</Link>
                    </div>

                </div>
            </Container>
        </nav>
    );
}
