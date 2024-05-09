import { Link } from "react-router-dom";

import {
	demoThumbnailUrl,
	demoVideoUrl,
	demoVideoTitle,
	demoChannelUrl,
	demoProfilePicture,
} from "../utils/constants";

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	return (
		<div className="w-60 h-60 bg-[#000] flex flex-wrap items-center justify-start ">
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<img
					className=""
					src={snippet?.thumbnails?.high?.url}
					alt={snippet?.title}
				/>
			</Link>
			<div className="">hello</div>
		</div>
	);
};

export default VideoCard;
