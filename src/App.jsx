import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
	Navbar,
	Feed,
	VideoDetail,
	ChannelDetail,
	SearchFeed,
} from "./components";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" exact element={<Feed />} />
				<Route path="/video/:id" element={<VideoDetail />} />
				<Route path="/channel/:id" element={<ChannelDetail />} />
				<Route path="/search/:searchTerm" element={<SearchFeed />} />
			</Routes>
		</Router>
	);
};

export default App;
