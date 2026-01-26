'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logout } from "@/app/api/service/auth";

import { FiBox, FiCreditCard, FiLayers, FiLogOut, FiShoppingCart } from "react-icons/fi";

const menuItems = [
    {
      name: "Products",
      icon: FiBox,
      link: "/admin/products",
    },
    {
      name: "Categories",
      icon: FiLayers,
      link: "/admin/categories",
    },
    {
      name: "Transactions",
      icon: FiShoppingCart,
      link: "/admin/transactions",
    },
    {
      name: "Bank Information",
      icon: FiCreditCard,
      link: "/admin/bank",
    },
  ];

export default function SideBar(){
    const pathname = usePathname();
    return(
        <header>
            <aside className="w-80 min-h-screen bg-white border-r border-gray-200 fixed left-0 top-0 flex flex-col">
                <div className="w-full flex items-center justify-center border-b border-gray-200 py-6">
                    <Image src='/logo-header.svg' alt='' width={120} height={30}/>
                </div>
                <nav className="flex-1 space-y-2 mt-8 px-6">
                    {menuItems.map((item, index) => {
                        const isActive = item.link === pathname;
                        return(
                            <Link href={item.link} key={index} className={`flex gap-4 items-center py-3 px-4 rounded-lg font-medium duration-300 transition-all ${isActive ? "bg-primary/15 text-primary" : "text-gray-700 hover:bg-gray-100"}`}>
                                <item.icon size={24} />
                                <span className="text-sm">{item.name}</span>
                            </Link>
                        )
                    })}
                </nav>
                <div className="p-6">
                    <Link onClick={Logout} href={'/admin/signin'} className="flex gap-4 font-medium py-3 px-4 text-gray-700 hover:bg-gray-100 duration-300 rounded-lg">
                        <FiLogOut size={24} />
                        Log Out
                    </Link>
                </div>
            </aside>
        </header>
    )
}