import { EventCard } from "@/components/events/event-card";
import { GetCoinsBar } from "@/components/layouts/get-coins-bar";
import { ProductCard } from "@/components/market-place/product-card";
import { VideoCard } from "@/components/rekriti/video-card";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Page() {
  const videos = await prisma.videos.findMany({
    take: 3,
    include: {
      user: true,
    },
  })

  const events = await prisma.event.findMany({
    take: 3,
  })

  const products = await prisma.products.findMany({
    take: 3,
    where: {
      is_sold: false,
    },
    include: {
      seller: true,
    }
  })
  return (
    <main className="w-full min-h-screen pt-2 pr-4 flex flex-col gap-6">
      <GetCoinsBar />
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col justify-start items-start gap-2">
            <span>Catch up all the latest videos</span>
            <div className="flex justify-start items-center gap-4 flex-wrap">
              {videos.map((video, i) => {
                return (
                  <VideoCard video={video} key={i} />
                )
              })}
            </div>
          </div>
          <Link href={"/rekriti"} className="text-sm font-medium">
            see all
          </Link>
        </div>
        <div className="w-full border-b-[1px] border-gray-500" />
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col justify-start items-start gap-2">
            <span>Be a attendee join amazing events</span>
            <div className="flex justify-start items-center gap-4 flex-wrap">
              {events.map((event, i) => {
                return (
                  <EventCard event={event} key={i} />
                )
              })}
            </div>
          </div>
          <Link href={"/events"} className="text-sm font-medium">
            see all
          </Link>
        </div>
        <div className="w-full border-b-[1px] border-gray-500" />
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col justify-start items-start gap-2">
            <span>Explore the latest products in marketplace</span>
            <div className="flex justify-start items-center gap-4 flex-wrap">
              {products.map((product, i) => {
                return (
                  <ProductCard product={product} key={i} />
                )
              })}
            </div>
          </div>
          <Link href={"/market-place"} className="text-sm font-medium">
            see all
          </Link>
        </div>
        <div className="w-full border-b-[1px] border-gray-500" />
      </div>
      {/* <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <span>Give a new life plant a sap</span>
          <Link href={"/event"} className="text-sm font-medium">
            see all
          </Link>
        </div>
        <div className="w-full border-b-[1px] border-gray-500" />
      </div> */}
    </main>
  );
}