import ProductCard from "@/components/ProductCard";
import SummerCareTips from "@/components/SummerCareTips";
import SummerSaleBanner from "@/components/SummerSaleBanner";
import TopBrands from "@/components/TopBrand";


export default function Home() {
  return (
    <div>
        <SummerSaleBanner/>
       <ProductCard/>
       <SummerCareTips/>
       <TopBrands/>
    </div>
  );
}
