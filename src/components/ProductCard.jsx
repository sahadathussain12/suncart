import Image from "next/image";
import { Button } from "@heroui/react";

const ProductCard = async () => {
  const res = await fetch("https://suncart-kuxb.vercel.app/product.json", {
    cache: "no-store",
  });

  const data = await res.json();
  const products = data.slice(0, 3);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-xl shadow-md overflow-hidden"
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
              <b>Brand:</b> {product.brand}
            </p>

            <p>
              <b>Category:</b> {product.category}
            </p>

            <p>
              ⭐ {product.rating}
            </p>

            <p className="text-orange-500 font-bold">
              ${product.price}
            </p>

            <p>
              <b>Stock:</b> {product.stock}
            </p>

            <p className="text-gray-500">
              {product.description}
            </p>
         

            <Button color="warning" className="w-full">
              View Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;