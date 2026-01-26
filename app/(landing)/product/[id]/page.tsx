import Image from "next/image";
import { notFound } from "next/navigation";
import PriceFormat from "@/app/utils/priceFormater";
import ProductActions from "@/app/components/page/productDetail/productaction";
import { GetProductDetail } from "@/app/api/service/product";
import { GetImageUrl } from "@/app/api/api";

export default async function ProductPage({params,}: {params: Promise<{ id: string }>;}) {
  const { id } = await params;
  const product = await GetProductDetail(id);

  return (
    <main className="container mx-auto my-32 flex gap-12 justify-center items-center">
      <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center rounded-lg">
        <Image src={GetImageUrl(product.imageUrl)} alt="" width={550} height={550} className="aspect-square w-full" />
      </div>
      <div className="space-y-8">
        <h1 className="font-bold text-dark text-5xl">{product.name}</h1>
        <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit">{[product.category.name]}</div>
        <p className="leading-loose">The SportsOn HyperSoccer v2 is engineered for the player who demands
          precision, power, and unrivaled speed on the pitch. Featuring a
          striking, two-toned black and white design with deep crimson accents,
          these cleats don't just perform—they make a statement. Experience the
          future of football footwear with v2's enhanced fit and cutting-edge
          traction.
        </p>
        <div className="text-primary text-[32px] font-semibold">
          {PriceFormat(product.price)}
        </div>
          <ProductActions product={product} stock={product.stock} />
      </div>
    </main>
  )
  
}
