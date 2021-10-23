import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 xl:mr-30 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl ">
        <Stories />
        <InputBox />
        <Posts />
      </div>
    </div>
  );
}

export default Feed;
