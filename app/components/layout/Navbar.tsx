'use client';
import Image from 'next/image';
import Link from 'next/link'
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopUp from '../ui/cartPopUp';
import { useState } from 'react';

{/* margin(jarak luar): mx(horizontal), my(vertikal), ml(left), mr(right), mt(top), mb(bottom) */}
{/* padding(jarak dalam): px(horizontal), py(vertikal), pl(left), pr(right), pt(top), pb(bottom) */}

{/*w: width, h: height, max-w: max-width, max-h: max-height, min-w: min-width, min-h: min-height */}

{/*flex: susunan asset secara horizontal*/}
{/*justify-between: 3 asset dengan penempatan pojok kiri tengah pojok kanan intinya ketengah nanti*/}

{/*tag header secara semantic: digunakan untuk keperluan SEO freindly*/}
{/*tag nav secara semantic: digunakan hanya untuk menyimpan link link utama website dan bukan tempat untuk logo dll*/}
{/*tag header memiliki value default width 100% kaan kiri*/}

{/*gap-? adalah styling agar asset yang ada didalam situ mempunyai gap segitu*/}
{/*styling container berfungsi untuk mengatur max width sesuai dengan yang ada di framework (intinya dia magic)*/}

{/*jika ingin membuat posisi absolute didalam sebuah tempat maka buat tempatnya itu relativ dulu agar component absolute dalam wadahnya tidak keluar*/}

const navMenu = [
    { name: 'Home', path: '/#hero-section' },
    { name: 'Category', path: '/#category-section' },
    { name: 'Explore Product', path: '/#products-section' },
];

let bagValue = 2;

export default function Header(){
    const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
    
    return (
        <header className='sticky top-0 z-50 bg-white'>
            <div className="flex justify-between container mx-auto py-7">
                <Image src="/logo-header.svg" alt="" width={127} height={30} />
                
                <nav className="flex gap-24 font-medium text-base">
                    {navMenu.map((menu) => (
                        <Link
                        scroll={false}
                        key={menu.name} 
                        href={menu.path} 
                        className="relative mx-6 py-2
                        after:absolute after:left-1/2 after:-bottom-1
                        after:h-0.5 after:w-0 after:bg-orange-500
                        after:-translate-x-1/2
                        after:transition-all after:duration-300
                        hover:after:w-full">
                            {menu.name}    
                        </Link>
                    ))}
                </nav>

                <div className="flex gap-10 relative">
                    <FiSearch size={24} className='cursor-pointer'/>
                    <div className='relative cursor-pointer' onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}>
                        <FiShoppingBag size={24}/>
                        <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center">{bagValue}</div>
                    </div>
                    {isCartPopupOpen && <CartPopUp />}
                </div>
            </div>
        </header>
    );
}