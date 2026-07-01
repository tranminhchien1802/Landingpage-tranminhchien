import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const StorySection = dynamic(() => import("@/components/StorySection"), { ssr: true });
const Features = dynamic(() => import("@/components/Features"), { ssr: true });
const Specs = dynamic(() => import("@/components/Specs"), { ssr: true });
const ShopSection = dynamic(() => import("@/components/ShopSection"), { ssr: true });
const RecentlyViewed = dynamic(() => import("@/components/RecentlyViewed"), { ssr: true });
const Newsletter = dynamic(() => import("@/components/Newsletter"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StorySection />
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
