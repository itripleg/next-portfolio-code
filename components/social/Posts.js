import Post from "./Post";
import { useCollection } from "react-firehooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { firestore, addDoc } from "../../firebase";

function Posts() {
  const [posts, loading, error] = useCollection(collection(firestore, "posts"));

  return (
    <div>
      {posts?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          serverTimestamp={post.data().timeStamp.toDate()}
          image={post.data().image}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
}

export default Posts;
