import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
	return (
		<div className="flex flex-col items-center justify-center w-full py-2">
			{categories.map((category) => (
				<button
					onClick={() => setSelectedCategory(category.name)}
					style={{
						background: category.name === selectedCategory && "#FC1503",
						color: "#fff",
					}}
					key={category.name}
					className="flex items-center justify-start w-full px-4 py-2 my-1 font-medium rounded-xl "
				>
					<span
						style={{
							color: category.name === selectedCategory ? "#fff" : "#FC1503",
							marginRight: "15px",
						}}
					>
						{category.icon}
					</span>
					<span
						style={{
							opacity: category.name === selectedCategory ? "1" : "0.8",
						}}
						className="text-sm"
					>
						{category.name}
					</span>
				</button>
			))}
		</div>
	);
};

export default Sidebar;
