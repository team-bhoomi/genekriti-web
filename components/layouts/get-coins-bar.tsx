import Link from "next/link";

export const GetCoinsBar = () => {
  return (
    <div className="flex items-center text-sm gap-2 font-medium">
      <div className="font-semibold">Get Coins: </div>
      <div className="flex items-center gap-2 *:px-4 *:py-1 *:rounded-md">
        <Link
          href={"/quiz"}
          className="bg-[#E5AA70] hover:drop-shadow-lg"
        >
          Give a quiz
        </Link>
        <Link
          href={"/plant-a-sap"}
          className="bg-[#b2ec5d] hover:drop-shadow-lg"
        >
          Plant a Sap
        </Link>
        <Link
          href={"/events"}
          className="bg-[#87ceeb] hover:drop-shadow-lg"
        >
          Attend an event
        </Link>
      </div>
    </div>
  );
};