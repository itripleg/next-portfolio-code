import React from "react";
import { storage, firestore } from "./../../firebase";
import Image from "next/image";
import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { useCollection } from "react-firehooks/firestore";

function index() {
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const upload = async (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `images/ ${image.name}`);
    uploadBytes(storageRef, image);
    alert("file sent!");
    console.log(image);
  };

  const sendIt = async () => {
    await console.log(firestore)?.collection("posts");
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(event.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const [posts, postsLoading, postsError] = useCollection();

  return (
    <div className="outline-black">
      <h1 className="">Firebase Upload Test</h1>
      <div className="flex flex-col justify-center space-between mx-auto">
        <form>
          <input type="file" onChange={handleChange} />
          <button onClick={upload} className="border-4">
            Upload
          </button>
        </form>
        <div id="image"></div>
        <div id="text" className="flex">
          <input
            type="text"
            className="bg-gray-400 border-2 border-black flex-grow mr-2"
          />
          <button onClick={sendIt} className="border-2-4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
