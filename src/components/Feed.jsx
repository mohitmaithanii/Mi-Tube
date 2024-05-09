import { useState, useEffect } from "react";
import { Sidebar, Videos } from "../components";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState("New");
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
			setVideos(data.items)
		);
	}, [selectedCategory]);

	return (
		<div className=" flex bg-[#000] text-[#fff] w-full h-screen">
			{/* sidebar */}
			<div className="border-r border-[#333] px-4 max-w-52">
				<Sidebar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
				
			</div>
			{/* videos */}
			<div className="w-full px-4 overflow-hidden">
				<div className="pt-2 text-2xl font-bold capitalize">
					{selectedCategory}
					<span className="text-[#FC1503]"> videos</span>
				</div>
				<Videos videos={videos} />
			</div>
		</div>
	);
};

export default Feed;
