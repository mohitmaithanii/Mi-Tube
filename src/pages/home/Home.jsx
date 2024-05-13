import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";

const Home = () => {
	return (
		<div className="homePage">
			<HeroBanner />
			<div style={{ height: 1000 }} className=""></div>
		</div>
	);
};

export default Home;
