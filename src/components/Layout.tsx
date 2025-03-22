import Navbar from "@/components/Navbar";

interface IlayoutProps {
    children: React.ReactNode
}


export default function Layout({children}:IlayoutProps) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}
