"use client";

import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Product } from "@/app/api";
import { GetAllProducts } from "@/app/api/service/product";
import { DeleteProduct } from "@/app/api/service/product";
import Button from "@/app/components/ui/button";
import ProductTable from "@/app/components/page/admin/products/table";
import ProductModal from "@/app/components/page/admin/products/modal";
import DeleteModal from "@/app/components/ui/admin/DeleteModal";


export default function ProductManagement () {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productToDeleteId, setProductToDeleteId] = useState("");

  const fetchProducts = async () => {
    try {
      const data = await GetAllProducts();
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setProductToDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!productToDeleteId) return;
    try {
      await DeleteProduct(productToDeleteId);
      fetchProducts();
      setIsDeleteModalOpen(false);
      setProductToDeleteId("");
    } catch (error) {
      console.error("Failed to delete product", error);
      alert("Failed to delete product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-bold text-4xl text-dark">Product Management</h1>
          <p className="text-gray-600 mt-2">Manage your inventory, set prices, and track stock levels.</p>
        </div>
        <Button size="big" className="rounded-lg" onClick={() => setIsModalOpen(true)}>
          <FiPlus size={20} />
          Add Product
        </Button>
      </div>

      {products.length > 0 ? (
        <ProductTable
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
          <p className="text-gray-500 text-lg">No products yet. Click "Add Product" to create one.</p>
        </div>
      )}

      <ProductModal
        product={selectedProduct}
        onSuccess={fetchProducts}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

