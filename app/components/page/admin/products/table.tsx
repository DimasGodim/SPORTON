import { GetImageUrl } from "@/app/api/api";
import { Product } from "@/app/api";
import PriceFormat from "@/app/utils/priceFormater";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

type TProductTableProps = {
  products: Product[];
  onDelete?: (id: string) => void;
  onEdit?: (product: Product) => void;
};

export default function ProductTable ({ products, onDelete, onEdit }: TProductTableProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50">
          <tr className="border-b border-gray-200">
            <th className="px-6 py-5 font-bold text-dark text-sm">Product</th>
            <th className="px-6 py-5 font-bold text-dark text-sm">Category</th>
            <th className="px-6 py-5 font-bold text-dark text-sm">Price</th>
            <th className="px-6 py-5 font-bold text-dark text-sm">Stock</th>
            <th className="px-6 py-5 font-bold text-dark text-sm">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((data) => (
            <tr
              key={data._id}
              className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-5 font-medium text-dark">
                <div className="flex gap-3 items-center">
                  <div className="aspect-square bg-gray-100 rounded-lg shrink-0">
                    <Image
                      src={GetImageUrl(data.imageUrl)}
                      width={48}
                      height={48}
                      alt={data.name}
                      className="aspect-square object-contain"
                    />
                  </div>
                  <span className="line-clamp-2">{data.name}</span>
                </div>
              </td>
              <td className="px-6 py-5 font-medium">
                <div className="rounded-full text-dark px-3 py-1 w-fit text-sm font-semibold">
                  {data.category.name}
                </div>
              </td>
              <td className="px-6 py-5 font-bold text-dark">
                {PriceFormat(data.price)}
              </td>
              <td className="px-6 py-5 font-medium text-dark">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-dark`}>
                  {data.stock} units
                </div>
              </td>
              <td className="px-6 py-5 flex items-center gap-3">
                <button
                  onClick={() => onEdit?.(data)}
                  className="p-2 hover:bg-gray-100 text-gray-600 rounded-lg transition-colors font-medium"
                  title="Edit product"
                >
                  <FiEdit2 size={18} />
                </button>
                <button
                  onClick={() => onDelete?.(data._id)}
                  className="p-2 hover:bg-gray-100 text-gray-600 rounded-lg transition-colors font-medium"
                  title="Delete product"
                >
                  <FiTrash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
