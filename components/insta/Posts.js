import Post from "./Post";

const posts = [
	{
		id: "1",
		username: "me",
		userImg: "/me.jpg",
		img: "me_mask.jpg",
		caption: "get it",
	},
	{
		id: "2",
		username: "me",
		userImg: "/me.jpg",
		img: "me_mask.jpg",
		caption: "get it",
	},
];

function Posts() {
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					username={post.username}
					userImg={post.userImg}
					img={post.img}
					caption={post.caption}
				/>
			))}
		</div>
	);
}

export default Posts;
