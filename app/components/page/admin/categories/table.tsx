import { GetImageUrl } from "@/app/api/api";
import { Category } from "@/app/api";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

type TCategoryTableProps = {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
};

export default function CategoryTable({
  categories,
  onEdit,
  onDelete,
}: TCategoryTableProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead className="bg-gray-50">
          <tr className="border-b border-gray-200">
            <th className="px-6 py-5 text-sm font-bold text-dark">
              Category Name
            </th>
            <th className="px-6 py-5 text-sm font-bold text-dark">
              Description
            </th>
            <th className="px-6 py-5 text-sm font-bold text-dark text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {categories.map((data) => (
            <tr
              key={data._id}
              className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-5 align-middle">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                    <Image
                      src={GetImageUrl(data.imageUrl)}
                      width={40}
                      height={40}
                      alt={data.name}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium text-dark line-clamp-2">
                    {data.name}
                  </span>
                </div>
              </td>

              <td className="px-6 py-5 align-middle">
                <p className="text-sm text-dark font-semibold">
                  {data.description}
                </p>
              </td>

              <td className="px-6 py-5 align-middle">
                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => onEdit(data)}
                    className="p-2 rounded-lg text-dark hover:bg-blue-100 transition-colors"
                    title="Edit category"
                  >
                    <FiEdit2 size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(data._id)}
                    className="p-2 rounded-lg text-dark hover:bg-red-100 transition-colors"
                    title="Delete category"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {categories.length === 0 && (
            <tr>
              <td
                colSpan={3}
                className="px-6 py-10 text-center text-sm text-gray-500"
              >
                No categories found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
