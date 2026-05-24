"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";


export const Sidebar = () => {
    const pathname = usePathname();
    console.log(pathname)
    const navItems = [
        {
            name: "Dashboard",
            link: "/shop/dashboard"
        },
        {
            name: "Products",
            link: "/shop/products"
        },
        {
            name: "Orders",
            link: "/shop/orders"
        },
        {
            name: "Settings",
            link: "/shop/settings"
        }
    ]
    return (
        <div className="w-64 h-screen bg-gray-900 text-white p-4">
            <h2 className="text-xl font-bold mb-6">Shop Pannel</h2>
            <nav className="flex flex-col gap-2">
                {
                    navItems.map((item) => {
                        console.log(pathname, item.link, pathname === item.link)
                        const isActive = pathname === item.link;
                        return (
                            <Link
                                key={item.link}
                                href={item.link}
                                className={`p-2 rounded-md transition 
                                        ${isActive ? "bg-white text-black font-semibold" : "hover:bg-gray-700"}
                                        `}>

                                {item.name}
                            </Link>
                        )


                    })
                }

            </nav>
        </div>
    )
}
