import { useSession } from "next-auth/react";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { firestore, storage } from "../../firebase";
import {
	doc,
	collection,
	addDoc,
	serverTimestamp,
	updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const InputBox = () => {
	const { data: session, status } = useSession();
	const [image, setImage] = useState(null);
	const [localImageURL, setlocalImageURL] = useState("");

	const inputRef = useRef(null);
	const fileRef = useRef(null);

	const sendPost = async (e) => {
		e.preventDefault();
		if (!inputRef.current.value) return;
		const docRef = await addDoc(collection(firestore, "posts"), {
			message: inputRef.current.value,
			name: session.user.name,
			email: session.user.email,
			image: session.user.image,
			timeStamp: serverTimestamp(),
		});
		if (image) {
			const storageRef = ref(storage, `images/${image.name}`);
			await uploadBytes(storageRef, image);

			const url = await getDownloadURL(storageRef);

			//update doc with the download url
			try {
				await updateDoc(doc(firestore, "posts", docRef.id), {
					postImage: url,
				});
			} catch (err) {
				console.log(err);
			}

			inputRef.current.value = "";
			removeImage();
		}
	};

	const addImageToPost = async (e) => {
		//seems to work fine without a reader?
		const reader = new FileReader();
		if (e.target.files[0]) {
			setImage(event.target.files[0]);
			setlocalImageURL(URL.createObjectURL(e.target.files[0]));
		}
	};
	// debug
	// console.log(image);
	// console.log(localImageURL);

	const removeImage = () => {
		setImage(null);
	};

	return (
		<div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
			<div className="flex spacd-x-4 p-4 items-center">
				<Image
					className="rounded-full"
					src={session.user.image}
					width={40}
					height={40}
					layout="fixed"
					alt="User Profile"
				/>
				<form className="flex flex-1">
					<input
						ref={inputRef}
						className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
						type="text"
						placeholder={`What's up, ${session.user.name}!`}
					/>
					<button hidden type="submit" onClick={sendPost}>
						Submit
					</button>
				</form>
			</div>

			<div className="flex justify-evenly p-3 border-t pb-">
				{/*Live/Video Icon*/}
				<div className="inputIcon">
					<VideoCameraIcon className="h-7 text-red-500" />
					<p className="hidden sm:inline-flex text-xs sm:text-sm xl:text-base">
						Live Video
					</p>
				</div>

				{/*Add Photo/Video Icon*/}
				<div onClick={() => fileRef.current.click()} className="inputIcon">
					<CameraIcon className="h-7 text-green-400" />
					<p className="hidden sm:inline-flex text-xs sm:text-sm xl:text-base">
						Photo / Video
					</p>
					<input ref={fileRef} onChange={addImageToPost} type="file" hidden />
				</div>

				{/*Feeling/Activity*/}
				<div className="inputIcon">
					<EmojiHappyIcon className="h-7 text-yellow-300" />
					<p className="hidden sm:inline-flex text-xs sm:text-sm xl:text-base">
						Feeling / Activity
					</p>
				</div>
			</div>
			<div id="url"></div>
			{image && (
				<div
					onClick={removeImage}
					className=" pb-4 flex flex-col cursor-pointer mx-4 p-4 border-t"
				>
					<Image
						src={localImageURL}
						alt="Preview"
						height={600}
						width={400}
						className="  w-full px-4 object-contain"
					/>
				</div>
			)}
		</div>
	);
};

export default InputBox;
