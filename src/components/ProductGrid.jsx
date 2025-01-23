import React from "react"
import c1 from "../assets/1.jpeg";
import c2 from "../assets/2.jpeg";
import c3 from "../assets/3.jpeg";
import c4 from "../assets/4.jpeg";
import c5 from "../assets/5.jpeg";
import c6 from "../assets/6.jpeg";
import c7 from "../assets/7.jpeg";
import c8 from "../assets/8.jpeg";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
      <div className="relative aspect-[3/4]">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />

        {product.discount && (
          <span className="absolute top-4 left-4 bg-red-400 text-white text-sm px-3 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%]">
            <button className="w-full bg-white text-yellow-600 py-2 px-4 font-medium hover:bg-yellow-50 transition-colors">
              Add to cart
            </button>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 text-white">
            <button className="hover:text-yellow-400 transition-colors">Share</button>
            <button className="hover:text-yellow-400 transition-colors">Compare</button>
            <button className="hover:text-yellow-400 transition-colors">Like</button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.description}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-semibold text-gray-800">Rp {product.currentPrice.toLocaleString()}</span>
          {product.originalPrice > product.currentPrice && (
            <span className="text-gray-400 line-through text-sm">Rp {product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      currentPrice: 2500000,
      originalPrice: 3500000,
      image: c1, // Pexels
      discount: 30,
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      currentPrice: 2500000,
      originalPrice: 3000000,
      image: c2, // Pexels
      discount: 15,
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      currentPrice: 7000000,
      originalPrice: 14000000,
      image: c3, // Pexels
      discount: 50,
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      currentPrice: 500000,
      originalPrice: 500000,
      image: c4, // Pexels
      isNew: true,
    },
    {
      id: 5,
      name: "Gran Comfort",
      description: "Modern recliner chair",
      currentPrice: 4500000,
      originalPrice: 6000000,
      image: c5, // Pexels
      discount: 25,
    },
    {
      id: 6,
      name: "Eleganza",
      description: "Glass dining table",
      currentPrice: 8500000,
      originalPrice: 8500000,
      image: c6, // Pexels
      isNew: true,
    },
    {
      id: 7,
      name: "Lumina",
      description: "Floor lamp with dimmer",
      currentPrice: 1200000,
      originalPrice: 2000000,
      image: c7, // Pexels
      discount: 40,
    },
    {
      id: 8,
      name: "Botanica",
      description: "Indoor plant stand",
      currentPrice: 800000,
      originalPrice: 800000,
      image: c8, // Pexels
    },
  ];
  
  

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-8">
        <button className="px-4 py-2 bg-yellow-600 text-white rounded">1</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-yellow-600 hover:text-white">2</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-yellow-600 hover:text-white">3</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-yellow-600 hover:text-white">
          Next
        </button>
      </div>
    </div>
  )
}

