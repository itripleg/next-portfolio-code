import Post from "./Post";
import { useEffect, useState } from "react";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase";

function Posts() {
	const [posts, setPosts] = useState([]); //be sure to useState with an array as default
	useEffect(
		() =>
			onSnapshot(
				query(
					collection(firestore, "insta_posts"),
					orderBy("timeStamp", "desc")
				),
				(snapshot) => {
					setPosts(snapshot.docs);
				}
			),
		[firestore]
	);
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.data().username}
					userImg={post.data().profileImg}
					img={post.data().postImage}
					caption={post.data().caption}
				/>
			))}
		</div>
	);
}

export default Posts;
