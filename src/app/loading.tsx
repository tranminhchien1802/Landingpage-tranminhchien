import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Skeleton className="h-6 w-36" />
          <div className="flex items-center gap-4">
            <Skeleton className="hidden h-4 w-20 md:block" />
            <Skeleton className="hidden h-4 w-16 md:block" />
            <Skeleton className="hidden h-4 w-14 md:block" />
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </header>

      <section className="flex min-h-[90vh] items-center justify-center px-4">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <Skeleton className="mx-auto h-6 w-44 rounded-full lg:mx-0" />
            <Skeleton className="mx-auto h-20 w-full lg:mx-0" />
            <Skeleton className="mx-auto h-6 w-3/4 lg:mx-0" />
            <div className="flex gap-4">
              <Skeleton className="h-14 w-40 rounded-full" />
              <Skeleton className="h-14 w-40 rounded-full" />
            </div>
          </div>
          <div className="flex justify-center">
            <Skeleton className="h-[380px] w-[340px] rounded-3xl" />
          </div>
        </div>
      </section>

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
    </div>
  );
}
