import Post from "./Post";

const posts = [
	{
		id: "123",
		username: "bbchocobo",
		userImg: "./me_mask.jpg",
		img: "./shoutout.jpg",
		caption: "Sup bitches",
	},
	{
		id: "234",
		username: "bluewetball",
		userImg: "./me.jpg",
		img: "./dokoro.gif",
		caption: "Sup bitches",
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
					caption={post.caption}
					img={post.img}
					caption={post.caption}
				/>
			))}
		</div>
	);
}

export default Posts;
