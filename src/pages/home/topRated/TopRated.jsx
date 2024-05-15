import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import useFetch from "../../../hooks/useFetch";

const Popular = () => {
	const { data, loading, error } = useFetch(`/movie/top_rated`);

	return (
		<div className="carouselSection">
			<ContentWrapper>
				<span className="carouselTitle"> Top Rated</span>
				{error && <div>Error: {error}</div>}
			</ContentWrapper>
			{data && (
				<Carousel data={data?.results} loading={loading} endpoint="movie" />
			)}
		</div>
	);
};

export default Popular;
