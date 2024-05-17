import ReactPlayer from "react-player/youtube";

import "./style.scss";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
	const handleClose = () => {
		setShow(false);
		setVideoId(null);
	};

	return (
		<div className={`videoPopup ${show ? "visible" : ""}`}>
			<div className="opacityLayer" onClick={handleClose}></div>
			<div className="videoPlayer">
				<span className="closeBtn" onClick={handleClose}>
					Close
				</span>
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${videoId}`}
					controls
					width="100%"
					height="100%"
					playing={show}
				/>
			</div>
		</div>
	);
};

export default VideoPopup;
