import { Link } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import {
	demoThumbnailUrl,
	demoVideoUrl,
	demoVideoTitle,
	demoChannelUrl,
	demoProfilePicture,
	demoChannelTitle,
} from "../utils/constants";

const VideoImage = ({ videoId, thumbnailUrl }) => (
	<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
		<img
			src={thumbnailUrl}
			alt={videoId}
			className="object-cover w-full h-full rounded-none"
		/>
	</Link>
);

const VideoTitle = ({ title }) => (
	<div className="text-sm font-medium tracking-tighter text-start">
		{title.slice(0, 60)}
	</div>
);

const ChannelLink = ({ channelId, channelTitle }) => (
	<Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
		<div className="text-xs font-normal text-start text-[#999] flex items-center gap-2">
			{channelTitle}
			<span>
				<CircleCheck
					fill="#999"
					color="#000"
					size={14}
					strokeWidth={1}
					absoluteStrokeWidth
				/>
			</span>
		</div>
	</Link>
);

const VideoCard = ({ video }) => {
	const {
		id: { videoId },
		snippet,
	} = video;
	const thumbnailUrl = snippet?.thumbnails?.high?.url ?? demoThumbnailUrl;
	const title = snippet?.title ?? demoVideoTitle;
	const channelId = snippet?.channelId;
	const channelTitle = snippet?.channelTitle ?? demoChannelTitle;

	return (
		<div className="w-64 h-64 bg-[#000] flex flex-wrap items-center justify-start shadow-none rounded-none">
			<VideoImage videoId={videoId} thumbnailUrl={thumbnailUrl} />
			<div className="">
				<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
					<VideoTitle title={title} />
				</Link>
				<ChannelLink channelId={channelId} channelTitle={channelTitle} />
			</div>
		</div>
	);
};

export default VideoCard;
