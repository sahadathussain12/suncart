import {
  FaTint,
  FaSun,
  FaGlasses,
  FaAppleAlt,
} from "react-icons/fa";

const tips = [
  {
    id: 1,
    title: "Stay Hydrated",
    description:
      "Drink 8–10 glasses of water every day to stay fresh and healthy.",
    icon: <FaTint className="text-5xl text-blue-500" />,
  },
  {
    id: 2,
    title: "Use Sunscreen",
    description:
      "Apply SPF 30+ sunscreen before going outside to protect your skin.",
    icon: <FaSun className="text-5xl text-yellow-500" />,
  },
  {
    id: 3,
    title: "Wear Sunglasses",
    description:
      "Protect your eyes from harmful UV rays with quality sunglasses.",
    icon: <FaGlasses className="text-5xl text-orange-500" />,
  },
  {
    id: 4,
    title: "Eat Fresh Fruits",
    description:
      "Eat watermelon, cucumber and seasonal fruits to stay cool.",
    icon: <FaAppleAlt className="text-5xl text-green-500" />,
  },
];

const SummerCareTips = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center">
         Summer Care Tips
      </h2>

      <p className="text-center text-gray-500 mt-2 mb-10">
        Stay cool and healthy with these simple summer tips.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-orange-50 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 duration-300 text-center"
          >
            <div className="flex justify-center mb-4">
              {tip.icon}
            </div>

            <h3 className="text-xl font-bold mb-2">
              {tip.title}
            </h3>

            <p className="text-gray-600">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SummerCareTips;