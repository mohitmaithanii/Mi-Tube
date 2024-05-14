import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

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
	console.log(url);

	useEffect(() => {
		fetchApiConfig();
		genresCall();
	}, []);

	const fetchApiConfig = () => {
		fetchDataFromApi("/configuration").then((res) => {
			console.log(res);

			const url = {
				backdrop: res.images.secure_base_url + "original",
				poster: res.images.secure_base_url + "original",
				profile: res.images.secure_base_url + "original",
			};

			dispatch(getApiConfiguration(url));
		});
	};

	const genresCall = async () => {
		let promises = [];
		let endPoints = ["tv", "movie"];
		let allGenres = {};

		endPoints.forEach((url) => {
			promises.push(fetchDataFromApi(`/genre/${url}/list`));
		});

		const data = await Promise.all(promises);
		console.log(data);
		data.map(({ genres }) => {
			return genres.map((item) => (allGenres[item.id] = item));
		});

		dispatch(getGenres(allGenres));
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
			<Footer />
		</Router>
	);
};

export default App;
