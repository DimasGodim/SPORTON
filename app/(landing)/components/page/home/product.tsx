import ProductCard from "../../ui/ProductCard";

const productList = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: "Rp. 329.000",
    imgUrl: "/product/shoes-red.svg",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: "Rp. 999.000",
    imgUrl: "/product/racket-red.svg",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: "Rp. 119.000",
    imgUrl: "/product/sportshirt-red.svg",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: "Rp. 458.000",
    imgUrl: "/product/football-shoes-red.svg",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: "Rp. 458.000",
    imgUrl: "/product/football-shoes-red.svg",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: "Rp. 119.000",
    imgUrl: "/product/sportshirt-black.svg",
  },
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: "Rp. 329.000",
    imgUrl: "/product/shoes-black.svg",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: "Rp. 999.000",
    imgUrl: "/product/racket-green.svg",
  },
];

export default function ProductSection(){
    return(
        <section id="products-section" className="container mx-auto mt-32">
            <h2 className="font-bold italic text-4xl text-center mb-11 text-[#FF5F3F]">OUR <span className="text-black">PRODUCT</span></h2>
            <div className="grid grid-cols-4">
                {productList.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.imgUrl}
                        name={product.name}
                        caterory={product.category}
                        price={product.price}
                    />
                ))}
            </div>
        </section>
    )
}