import {FaGlasses,FaTshirt,FaSpa,FaRunning,} from "react-icons/fa";

const brands = [
  {
    id: 1,
    name: "Ray-Ban",
    description: "Premium UV protection sunglasses.",
    icon: <FaGlasses className="text-6xl text-orange-500" />,
  },
  {
    id: 2,
    name: "Nike",
    description: "Comfortable summer sportswear.",
    icon: <FaRunning className="text-6xl text-blue-500" />,
  },
  {
    id: 3,
    name: "Nivea",
    description: "Trusted skincare products.",
    icon: <FaSpa className="text-6xl text-green-500" />,
  },
  {
    id: 4,
    name: "Adidas",
    description: "Stylish outfits for summer.",
    icon: <FaTshirt className="text-6xl text-purple-500" />,
  },
];

const TopBrands = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center">
         Top Brands
      </h2>

      <p className="text-center text-gray-500 mt-2 mb-10">
        Discover the most popular summer brands.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="border rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:scale-105 duration-300"
          >
            <div className="flex justify-center mb-5">
              {brand.icon}
            </div>

            <h3 className="text-2xl font-bold">
              {brand.name}
            </h3>

            <p className="text-gray-500 mt-3">
              {brand.description}
            </p>

            <button className="mt-5 bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600">
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopBrands;