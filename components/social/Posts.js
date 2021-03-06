import Post from "./Post";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase";
import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]); //be sure to useState with an array as default
  // think I was trying to update posts in realtime?
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(firestore, "posts"), orderBy("timeStamp", "desc")),
      (snaphot) => {
        setPosts(snaphot.docs);
      }
    );
    return;
  }, []);

  return (
    <div>
      {posts?.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          serverTimestamp={post.data().timeStamp?.toDate()}
          image={post.data().image}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
}

export default Posts;
