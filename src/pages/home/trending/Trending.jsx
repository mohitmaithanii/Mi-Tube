import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import useFetch from "../../../hooks/useFetch";

const Trending = () => {
	const { data, loading, error } = useFetch(`/trending/movie/day`);

	return (
		<div className="carouselSection">
			<ContentWrapper>
				<span className="carouselTitle">Trending</span>
				{error && <div>Error: {error}</div>}
			</ContentWrapper>
			{data && <Carousel data={data?.results} loading={loading} />}
		</div>
	);
};

export default Trending;
