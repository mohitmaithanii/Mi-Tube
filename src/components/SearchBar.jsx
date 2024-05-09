import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
	return (
		<div className="flex justify-start items-center bg-white rounded-3xl px-2 py-2 gap-2 md:px-4 lg:px-6">
			<input
				className="outline-none text-[#555] font-medium w-full md:w-auto md:flex-grow text-sm md:text-base"
				placeholder="Search..."
				value=""
				onChange={() => {}}
			/>
			<button type="submit" className="md:hidden">
				<Search size={20} color="#000" absoluteStrokeWidth />
			</button>
			<button type="submit" className="hidden md:flex">
				<Search size={24} color="#000" absoluteStrokeWidth />
			</button>
		</div>
	);
};

export default SearchBar;
