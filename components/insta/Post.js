import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { firestore } from "../../firebase";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const sendComment = async (e) => {
    e.preventDefault();
    // console.log(session);
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(firestore, "insta_posts", id, "comments"), {
      comment: commentToSend,
      username: username,
      profileImg: session.user.image,
      timeStamp: serverTimestamp(),
    });
  };

  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center px-4 space-x-2 p-5">
        <img
          src={userImg}
          alt="/user.png"
          className="w-14 h-14 object-contain border p-2 mr-3 rounded-full text-bold"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* img */}
      {img && (
        <img src={img} alt="post image" className="object-cover w-full" />
      )}
      {/* Buttons*/}
      <div className="flex justify-between px-4 p-4">
        <div className="flex space-x-4">
          <HeartIconFilled className="postBtn" />
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
      <form action="" className="flex items-center p-4">
        <EmojiHappyIcon className="postBtn" />
        <input
          type="text"
          onChange={(e) => setComment(e.target.value)}
          className="flex-1 focus:ring-0 border-none"
          placeholder="Post a comment..."
        />
        <button
          type="submit"
          disabled={!comment.trim()}
          onClick={sendComment}
          className="font-semibold text-blue-400"
        >
          Post!
        </button>
      </form>
    </div>
  );
}

export default Post;
