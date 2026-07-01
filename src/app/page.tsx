import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skeleton from "@/components/Skeleton";

const StorySection = dynamic(() => import("@/components/StorySection"), {
  loading: () => <div className="min-h-screen bg-background" />,
});

const Features = dynamic(() => import("@/components/Features"), {
  loading: () => (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-4 text-center">
          <Skeleton className="mx-auto h-8 w-72" />
          <Skeleton className="mx-auto h-4 w-80" />
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-8">
              <Skeleton className="mb-4 h-12 w-12 rounded-xl" />
              <Skeleton className="mb-2 h-5 w-2/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="mt-1 h-4 w-4/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
});

const Specs = dynamic(() => import("@/components/Specs"), {
  loading: () => (
    <section className="bg-card px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-4 text-center">
          <Skeleton className="mx-auto h-8 w-80" />
          <Skeleton className="mx-auto h-4 w-72" />
        </div>
        <div className="mt-16 overflow-hidden rounded-2xl border border-border">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className={`flex px-6 py-4 ${i % 2 === 0 ? "bg-card-hover" : "bg-card"}`}>
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="ml-4 h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
});

const ShopSection = dynamic(() => import("@/components/ShopSection"), {
  loading: () => (
    <section className="bg-card px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-4 text-center">
          <Skeleton className="mx-auto h-8 w-64" />
          <Skeleton className="mx-auto h-4 w-96" />
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border bg-background">
              <Skeleton className="aspect-square w-full rounded-none" />
              <div className="space-y-3 p-5">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-5 w-1/4" />
                <Skeleton className="h-10 w-full rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
});

const RecentlyViewed = dynamic(() => import("@/components/RecentlyViewed"), {
  loading: () => (
    <section className="border-t border-border bg-background px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <Skeleton className="h-6 w-48" />
        <div className="mt-8 flex gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="min-w-[240px] flex-shrink-0 overflow-hidden rounded-xl border border-border bg-card">
              <Skeleton className="aspect-square w-full rounded-none" />
              <div className="space-y-2 p-4">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/4" />
                <div className="mt-3 flex gap-2">
                  <Skeleton className="h-8 flex-1 rounded-md" />
                  <Skeleton className="h-8 w-10 rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
});

const Newsletter = dynamic(() => import("@/components/Newsletter"), {
  loading: () => (
    <section className="px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <Skeleton className="mx-auto h-8 w-64" />
        <Skeleton className="mx-auto h-4 w-96" />
        <div className="flex gap-3">
          <Skeleton className="h-12 flex-1 rounded-full" />
          <Skeleton className="h-12 w-32 rounded-full" />
        </div>
      </div>
    </section>
  ),
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => (
    <footer className="border-t border-border px-4 py-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-4 w-56" />
        </div>
        <div className="flex gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-4 w-16" />
          ))}
        </div>
      </div>
    </footer>
  ),
});

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
