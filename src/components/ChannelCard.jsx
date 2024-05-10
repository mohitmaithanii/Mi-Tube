import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import { CircleCheck } from "lucide-react";

const ChannelCard = ({ channelDetail }) => {
	return (
		<div className="w-64 h-64 bg-[#000] flex flex-wrap items-center justify-center shadow-none rounded-none ">
			<Link to={`/channel/${channelDetail?.id?.channelId}`}>
				<div className="flex flex-col justify-center text-center text-[#fff]">
					<img
						className="mb-2 border-2 rounded-full w-44 h-44"
						src={
							channelDetail?.snippet?.thumbnails?.high?.url ||
							demoProfilePicture
						}
						alt={channelDetail?.snippet?.title}
					/>
					<div className="flex items-center justify-center gap-2 font-medium">
						{channelDetail?.snippet?.title}
						<span>
							<CircleCheck
								fill="#999"
								color="#000"
								size={18}
								strokeWidth={1}
								absoluteStrokeWidth
							/>
						</span>
					</div>
					{channelDetail?.statistics?.subscriberCount && (
						<div className="">
							{parseInt(
								channelDetail?.statistics?.subscriberCount
							).toLocaleString()}{" "}
							subscribers
						</div>
					)}
				</div>
			</Link>
		</div>
	);
};

export default ChannelCard;
