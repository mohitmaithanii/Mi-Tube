import { useState, useEffect } from "react";
import { Sidebar, Videos } from "../components";

const Feed = () => {
	return (
		<div className=" flex bg-[#000] text-[#fff] w-full h-screen">
			{/* sidebar */}
			<div className="border-r border-[#333] px-4 max-w-52 ">
				<Sidebar />
				<p className="text-xs text-[#999]">Copyright 2024 © mohitmaithanii</p>
			</div>
			{/* videos */}
			<div className="w-full px-4 ">
				<div className="text-2xl font-bold capitalize ">
					{" "}
					New
					<span className="text-[#FC1503]"> videos</span>
				</div>
				<Videos videos={[]} />
			</div>
		</div>
	);
};

export default Feed;
