import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";

import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadingImage/Img";
import PosterFallback from "../../assets/Moviex-images/no-poster.png";
import CircleRating from "../circleRating/CircleRating";

import "./style.scss";

const Carousel = ({ data, loading }) => {
	const carouselContainer = useRef();
	const { url } = useSelector((state) => state.home);
	const navigate = useNavigate();

	const navigation = (dir) => {};

	const skItem = () => {
		return (
			<div className="skeletonItem">
				<div className="posterBlock">
					<div className="textBlock">
						<div className="title skeleton"></div>
						<div className="date skeleton"></div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="carousel">
			<ContentWrapper>
				<BsFillArrowLeftCircleFill
					className="carouselNav arrow"
					onClick={() => navigate("left")}
				/>
				<BsFillArrowRightCircleFill
					className="carouselNav arrow"
					onClick={() => navigate("right")}
				/>

				{!loading ? (
					<div className="carouselItems">
						{data?.map((item) => {
							const posterUrl = item.poster_path
								? url.poster + item.poster_path
								: PosterFallback;

							return (
								<div key={item.id} className="carouselItem">
									<div className="posterBlock">
										<Img src={posterUrl} alt="" />
										<CircleRating rating={item.vote_average.toFixed(1)} />
									</div>
									<div className="textBlock">
										<span className="title">{item.title || item.name}</span>
										<span className="date">
											{dayjs(item.release_Date).format("MMM D, YYYY")}
										</span>
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<div className="loadingSkeleton">
						{skItem()}
						{skItem()}
						{skItem()}
						{skItem()}
						{skItem()}
					</div>
				)}
			</ContentWrapper>
		</div>
	);
};

export default Carousel;
