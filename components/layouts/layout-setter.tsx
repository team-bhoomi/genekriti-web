"use client";
import { useState } from "react";
import { CoinBar } from "./coin-bar";
import { SideBar } from "./sidebar";

export const LayoutSetter = ({ children }: { children: React.ReactNode }) => {
	const [clicked, setClicked] = useState(false);
	return (
		<main
			className={`min-h-screen w-full bg-accent ${
				clicked ? "pl-[190px]" : "pl-[75px]"
			}`}
		>
			<CoinBar />
			<SideBar clicked={clicked} setClicked={setClicked} />
			{children}
		</main>
	);
};
