import { categories } from "../utils/categories";

const Sidebar = () => {
	const selectedCategory = "New";

	return (
		<div className="flex-col w-full flex items-center justify-center">
			{categories.map((category) => (
				<button
					style={{
						background: category.name === selectedCategory && "#FC1503",
						color: "#fff",
					}}
					key={category.name}
					className="w-full rounded-xl my-1 flex justify-start items-center py-2  px-4 font-medium "
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
