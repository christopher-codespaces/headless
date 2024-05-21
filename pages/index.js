import Image from "next/image";
import { Inter } from "next/font/google";
import ProductCard from "../components/ProductItem";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import ProductOverview from "../components/ProductOverView";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SignUp/>
      <ProductCard/>
      <ProductOverview/>
    </>
  );
}
