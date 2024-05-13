import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration } from "./store/homeSlice";

import {
	Header,
	Footer,
	Home,
	Details,
	SearchResult,
	Explore,
	PagesNotFound,
} from "../src/index.js";

const App = () => {
	const dispatch = useDispatch();
	const { url } = useSelector((state) => state.home);

	useEffect(() => {
		fetchApiConfig();
	}, []);

	const fetchApiConfig = () => {
		fetchDataFromApi("/configuration").then((res) => {
			console.log(res);

			const apiConfiguration = {
				backdrop: res.images.secure_base_url + "original",
				poster: res.images.secure_base_url + "original",
				profile: res.images.secure_base_url + "original",
			};

			dispatch(getApiConfiguration(apiConfiguration));
		});
	};

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:mediaType/:id" element={<Details />} />
				<Route path="/search/:query" element={<SearchResult />} />
				<Route path="/explore/:mediaType" element={<Explore />} />
				<Route path="*" element={<PagesNotFound />} />
			</Routes>
			{/* <Footer /> */}
		</Router>
	);
};

export default App;
