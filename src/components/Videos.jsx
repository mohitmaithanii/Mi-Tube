import React from "react";
import { VideoCard, ChannelCard } from "../components";

const Videos = ({ videos }) => {
	return (
		<div className="flex flex-wrap w-full h-screen overflow-y-hidden">
			<div className="flex flex-wrap w-full h-full overflow-y-scroll scroll-smooth gap-x-6 gap-y-4">
				{videos.map((item, index) => (
					<div key={index}>
						{item.id.videoId && <VideoCard video={item} />}
						{item.id.channelId && <ChannelCard channelDetail={item} />}
					</div>
				))}
			</div>
		</div>
	);
};

export default Videos;
