import Image from "next/image";
import { Button } from "@heroui/react";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://suncart-kuxb.vercel.app/product.json", {
    cache: "no-store",
  });

  const data = await res.json();

  const product = data.find((item) => item.id == id);

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-red-500">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white shadow-xl rounded-2xl p-8">

        {/* Product Image */}
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-[450px] object-cover rounded-xl"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-lg text-gray-600">
            {product.description}
          </p>

          <div className="space-y-2 text-lg">
            <p>
              <span className="font-semibold">Brand:</span>{" "}
              {product.brand}
            </p>

            <p>
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </p>

            <p>
              <span className="font-semibold">Rating:</span> ⭐{" "}
              {product.rating}
            </p>

            <p>
              <span className="font-semibold">Stock:</span>{" "}
              {product.stock}
            </p>

            <p className="text-3xl font-bold text-orange-500">
              ${product.price}
            </p>
          </div>

          <div className="flex gap-4 pt-5">
            <Button color="warning" size="lg">
              Buy Now
            </Button>

            <Button color="primary" variant="bordered" size="lg">
              Add to Cart
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsPage;