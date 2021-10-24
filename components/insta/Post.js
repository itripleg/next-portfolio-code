import {
	BookmarkIcon,
	ChatIcon,
	DotsHorizontalIcon,
	EmojiHappyIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, caption }) {
	return (
		<div className="bg-white my-7 border rounded-sm">
			{/* Header */}
			<div className="flex items-center px-4 space-x-2 p-5">
				<img
					src={userImg}
					alt=""
					className="w-14 h-14 object-contain border p-2 mr-3 rounded-full text-bold"
				/>
				<p className="flex-1 font-bold">{username}</p>
				<DotsHorizontalIcon className="h-5" />
			</div>
			{/* img */}
			<img src={img} alt="post image" className="object-cover w-full" />
			{/* Buttons*/}
			<div className="flex justify-between px-4 p-4">
				<div className="flex space-x-4">
					<HeartIconSolid className="postBtn" />
					<ChatIcon className="postBtn" />
					<PaperAirplaneIcon className="postBtn" />
				</div>
				<BookmarkIcon className="postBtn" />
			</div>
			{/*Captions */}
			<p className="p-5 truncate">
				<span className="font-bold mr-2">{username}</span>
				{caption}
			</p>
			{/*Comments*/}
			{/*Input box*/}
		</div>
	);
}

export default Post;
