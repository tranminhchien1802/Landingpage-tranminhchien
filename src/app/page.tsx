import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Specs from "@/components/Specs";
import ShopSection from "@/components/ShopSection";
import RecentlyViewed from "@/components/RecentlyViewed";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Specs />
        <ShopSection />
        <RecentlyViewed />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
