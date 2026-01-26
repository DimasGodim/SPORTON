'use client';
import Image from 'next/image';
import Link from 'next/link'
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopUp from '../ui/cartPopUp';
import { useState } from 'react';
import { UseCartStore } from '@/app/hooks/cart';

const navMenu = [
    { name: 'Home', path: '/#hero-section' },
    { name: 'Category', path: '/#category-section' },
    { name: 'Explore Product', path: '/#products-section' },
];

let bagValue = 2;

export default function Header(){
    const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
    const { items } = UseCartStore();

    return (
        <header className='sticky top-0 z-50 bg-white'>
            <div className="flex justify-between container mx-auto py-5 px-6">
                <Image src="/logo-header.svg" alt="" width={127} height={30} />
                
                <nav className="flex gap-24 font-medium text-base">
                    {navMenu.map((menu) => (
                        <Link
                        scroll={false}
                        key={menu.name} 
                        href={menu.path} 
                        className="relative mx-3 py-2
                        after:absolute after:left-1/2 after:-bottom-1
                        after:h-0.5 after:w-0 after:bg-orange-500
                        after:-translate-x-1/2
                        after:transition-all after:duration-300
                        hover:after:w-full">
                            {menu.name}    
                        </Link>
                    ))}
                </nav>

                <div className="flex gap-8 relative">
                    <FiSearch size={24} className='cursor-pointer'/>
                    <div className='relative cursor-pointer' onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}>
                        <FiShoppingBag size={24}/>
                        {items.length ?(
                            <div className="bg-primary rounded-full w-4 h-4 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center font-semibold">{items.length}</div>
                        ): (<></>)}
                    </div>
                    {isCartPopupOpen && <CartPopUp />}
                </div>
            </div>
        </header>
    );
}