import { FiFastForward } from "react-icons/fi";
import { GoPlay } from "react-icons/go";
import Image from "next/image";
import Button from "../../ui/button";

{/*style self-center hanya dapat digunakan ketika style parent grid dan flex, style ini membuat element menengah sesuai dengan aturan parent*/}
{/*styling grayscale digunakan untuk membuat efek abu abu hitam putih*/}
{/*styling ukuran font text-*/}
{/*styling ketebalan font font-*/}
{/*styling self-center hanya dapat digunakan ketika style parent grid atau flex gunannya menengahkan ke cross axis atau bisa disebut garis utama*/}
{/*styling h-screen digunakan untuk mengatur tinggi element menjadi 100% dari tinggi layar*/}

export default function HeroSection(){
    return(
        <section id="hero-section" className="container mx-auto h-screen flex">
            <div className="self-center relative">
                <Image src="/img-basketball.svg" alt="" width={423} height={423} className="grayscale absolute left-0 -top-20" />
                <div className="w-full ml-40">
                    
                    <div className=" ml-3 inline-flex items-center bg-orange-500/15 text-orange-500 px-4 py-2 rounded-full italic">
                    Friday Sale, 50%
                    </div>
                    <h1 className="font-extrabold text-8xl italic bg-linear-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
                        WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
                    </h1>
                    <p className="ml-3 w-1/2 mt-6 leading-loose">
                        Engineered for endurance and designed for speed. Experience gear
                        that moves as fast as you do. Premium fabrics. Unmatched comfort.
                        Limitless motion.
                    </p>
                    
                    <div className="ml-3 flex gap-10 mt-9">
                        <Button>
                            Explore More <FiFastForward color="white" />
                        </Button>
                        <Button variant="ghost">
                            Watch Video <Image src="/icon/icon-play-video.svg" width={30} height={30} alt="" />
                        </Button>
                        <Image src="/img-hero.svg" width={625} height={690} alt="" className="absolute -right-5 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </div>
            <Image src="/icon/img-ornament-hero.svg" alt="" width={415} height={415} className="absolute -right-50 top-1/2 -translate-y-1/2 "/>
        </section>
    );
}
