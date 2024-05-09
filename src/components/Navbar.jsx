import { Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
	return (
		<nav className="bg-black w-full px-4 py-4 flex items-center justify-between md:px-6 lg:px-8">
			<Link to="/" className="text-white">
				<Youtube size={30} color="#FC1503" absoluteStrokeWidth />
			</Link>
			<SearchBar />
		</nav>
	);
};

export default Navbar;
