import Image from "next/image";
import { Button } from "@heroui/react";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";

const ProductCard = async () => {
  const res = await fetch("https://suncart-kuxb.vercel.app/product.json", {
    cache: "no-store",
  });

  const data = await res.json();
  const products = data.slice(0, 3);

  return (
    <div>
  
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-500 mt-4">
        Popular Products
      </h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />

            <div className="p-4 space-y-2">
              <h2 className="text-xl font-bold">{product.name}</h2>

              <p>
                <span className="font-semibold">Brand:</span> {product.brand}
              </p>

              <p>
                <span className="font-semibold">Category:</span>{" "}
                {product.category}
              </p>

              <p className="flex items-center gap-1"><FaRegStar className="text-yellow-600"/> {product.rating}</p>

              <p className="text-orange-500 font-bold text-lg">
                ${product.price}
              </p>

              <p>
                <span className="font-semibold">Stock:</span> {product.stock}
              </p>

              <p className="text-gray-500 text-sm">
                {product.description}
              </p>
            <Link href={`products/${product.id}`}>
              <Button color="warning" className="w-full mt-3">
                View Details
              </Button>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;