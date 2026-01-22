import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { Category } from "@/app/api/index";
import { GetImageUrl } from "@/app/api/api";


export default function CategoriesSection({ categories }: { categories: Category[] }){
    return(
        <section id="category-section" className="container mx-auto">
            <div className="flex justify-between">
                <h2 className="font-bold text-2xl">Browse By Categories</h2>
                <Link href="" className="flex gap-2 text-primary text-base items-center cursor-pointer">See All Categories <FiArrowRight color="orange"/></Link>
            </div>
            <div className="grid grid-cols-6 gap-12 mt-8 ">
                {categories.map((category) => (
                    <Link key={category.name} href="" className="w-full rounded-2xl aspect-square flex justify-center bg-linear-to-r from-[#F1F1F1] to-[#F7F7F7]">
                          <div className="self-center">
                            <Image
                                src={GetImageUrl(category.imageUrl)}
                                width={90}
                                height={90}
                                alt={category.name}
                            />
                          <div className="mt-3 text-base font-medium text-primary text-center">{category.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}