// import dynamic from "next/dynamic";
import { useRecoilState } from "recoil";
import { chartModalState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { useRef, useState, Fragment } from "react";
import { CameraIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import {
  doc,
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "../firebase";

// const { firestore, storage } = dynamic(() =>
// 	import("../../firebase").then((mod) => mod.firestore, mod.storage)
// );

function ChartModal() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(chartModalState);
  const [imageToUpload, setImageToUpload] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileSelectRef = useRef(null);
  const captionInputRef = useRef(null);

  console.log("loading chart Modal");
  console.log(isOpen);

  const addImageToPost = async (e) => {
    if (e.target.files[0]) {
      setImageToUpload(event.target.files[0]);
    }
  };

  const uploadPost = async () => {
    if (loading) return;
    setLoading(true);
    if (!captionInputRef.current.value) return;
    const docRef = await addDoc(collection(firestore, "insta_posts"), {
      caption: captionInputRef.current.value,
      username: session.user.name,
      email: session.user.email,
      profileImg: session.user.image,
      timeStamp: serverTimestamp(),
    });
    if (imageToUpload) {
      console.log(imageToUpload);

      const storageRef = ref(storage, `insta_images/${imageToUpload.name}`);
      await uploadBytes(storageRef, imageToUpload);
      const url = await getDownloadURL(storageRef);
      //update doc with the download url
      try {
        await updateDoc(doc(firestore, "insta_posts", docRef.id), {
          postImage: url,
        });
      } catch (err) {
        console.log(err);
      }
    }
    setIsOpen(false);
    setLoading(false);
    setImageToUpload(null);
  };

  return (
    <>
      <div>
        <Transition.Root show={true} as={Fragment}>
          <Dialog
            className="fixed z-10 inset-0 overflow-y-auto"
            open={isOpen}
            onClose={setIsOpen}
          >
            <div
              className=" flex items-end justify-center min-h=[800px]
						sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-100"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay
                  className="fixed inset-0 bg-gray-500
                bg-opacity-75 transition-opacity"
                />
              </Transition.Child>
              {/*Browser centering trick*/}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-4 sm:translate-y-0 sm:scale-95"
                leaveTo="opacity-0"
              >
                <div
                  className="inline-block align-bottom
                bg-white rounded-lg px-4 pt-5 pb-4 text-left 
                overflow-hidden shadow-xl transform transition-all 
                sm:my-8 sm:align-middle sm:max-w-sm sm:w-full"
                >
                  <div className="mt-3 sm:mt-5 text-center relative">
                    {imageToUpload ? (
                      <div className="">
                        <img
                          src={URL.createObjectURL(imageToUpload)}
                          alt="can't load image"
                        />
                        <div
                          className="absolute -top-3 -right-3 rounded-full h-8 w-8 bg-red-600 items-center flex justify-center
											  animate hover:scale-110 transition ease cursor-pointer"
                          onClick={() => {
                            setImageToUpload(null);
                          }}
                        >
                          <p className="text-white text-xs">X</p>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="flex mx-auto items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
                        onClick={() => fileSelectRef.current.click()}
                      >
                        <CameraIcon
                          className="h-6 text-red-600 "
                          aria-hidden="true"
                        />
                      </div>
                    )}
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900 py-2"
                    >
                      Upload Photo
                    </Dialog.Title>
                    <input
                      type="file"
                      hidden
                      ref={fileSelectRef}
                      onChange={addImageToPost}
                    />
                    <input
                      type="text"
                      className="border-none focus:ring-0 w-full text-center"
                      placeholder="Please enter a caption..."
                      ref={captionInputRef}
                    />
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4
										py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:text-sm disabled:bg-gray-300
										disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                      onClick={uploadPost}
                    >
                      {loading ? "Uploading..." : "Upload Post"}
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
}

export default ChartModal;
