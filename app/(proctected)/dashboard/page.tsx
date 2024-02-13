import { GetCoinsBar } from "@/components/layouts/get-coins-bar";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full min-h-screen pt-2 pr-4 flex flex-col gap-6">
      <GetCoinsBar />
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <span>Catch up all the latest posts</span>
          <Link href={"/r3"} className="text-sm font-medium">
            see all
          </Link>
        </div>
        <div className="w-full border-b-[1px] border-gray-500" />
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <span>See what's new in the market</span>
          <Link href={"/marketplace"} className="text-sm font-medium">
            see all
          </Link>
        </div>
        <div className="w-full border-b-[1px] border-gray-500" />
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <span>Be a new leader join the event</span>
          <Link href={"/event"} className="text-sm font-medium">
            see all
          </Link>
        </div>
        <div className="w-full border-b-[1px] border-gray-500" />
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <span>Give a new life plant a sap</span>
          <Link href={"/event"} className="text-sm font-medium">
            see all
          </Link>
        </div>
        <div className="w-full border-b-[1px] border-gray-500" />
      </div>
    </main>
  );
}