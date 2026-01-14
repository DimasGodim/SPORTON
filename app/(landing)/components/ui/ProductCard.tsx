import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

{/*justify-center hanya dipakai ketika ada flex/grid dengan arah horizontal pengaruh ke element child*/}
{/*items-center hanya dipakai ketika ada flex/grid dengan arah vertikal pengaruh ke element child*/}
{/*self-center hanya bisa dipakai ketika parent flex/grid arah vertikal pengaruh ke element yang memakainya saja*/}
{/*place-center hanya bisa dipakai ketika parent grid arah vertikal dan horizontal */}
{/*text-center dipakai dimana saja fungsi untuk nengahin text secara horizontal*/}

type ProductProps = {
  image: string;
  name: string;
  caterory: string;
  price: string;
}

export default function ProductCard({ image, name, caterory, price }: ProductProps){
    return(
        <Link href="" className="w-full p-1.5 hover:drop-shadow-xl duration-300" >
            <div className="bg-[#F4EBEB] aspect-square w-full flex justify-center items-center relative">
                <Image src={image} alt="" width={300} height={300}/>
                <button className="w-10 h-10 bg-orange-500 absolute right-3 top-3 flex justify-center items-center hover:bg-orange-600 duration-300">
                    <FiPlus color="white" size={20}/>
                </button>
            </div>
            <div className="mt-4 relative">
                <h2 className="text-[18px] font-medium">{name}</h2>
                <div className="font-[#A0A0A0]">{caterory}</div>
                <div className="absolute right-0 bottom-0 text-[#FF5F3F] text-[16px] font-medium">{price}</div>
            </div>
        </Link>
    )
}