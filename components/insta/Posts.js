import Post from "./Post";

const posts = [
	{
		id: "123",
		username: "bbchocobo",
		userImg: "./me_mask.jpg",
		img: "./shoutout.jpg",
		caption: "Decentralize",
	},
	{
		id: "234",
		username: "bluewetball",
		userImg: "./me.jpg",
		img: "./dokoro.gif",
		caption: "血しぶきどこどこどころちゃん～",
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
