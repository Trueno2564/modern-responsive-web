import Link from "next/link";

export default function Navbar() {
    return (
        <div className="grid items-center w-full justify-between md:grid-cols-2 gap-4 md:gap-20 md:px-20 my-3">
            <img src="/assets/logo.png" alt="Logo" width={150} height={25} className="mx-auto md:mx-0"/>
            <div className="flex gap-4 text-center w-full">
                <Link href="#overview">Overview</Link>
                <Link href="#features">Features</Link>
                <Link href="#about">About</Link>
                <Link href="#practice">Practice</Link>
                <Link href="#pricing">Pricing</Link>
            </div>
        </div>
    )
}
