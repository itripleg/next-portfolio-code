import React from "react";
import StoryCard from "./StoryCard";
// import { useSession } from 'next-auth/client'

// const getCurrentUser = () => {
// 	const [ session ] = useSession();
// 	if (session){

// 	}
// }

const currentUser = {
  name: "josh",
  src: "/me.jpg",
  profile: "/me_mask.jpg",
};

const storyData = [
  {
    name: currentUser.name,
    src: currentUser.src,
    profile: currentUser.profile,
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezos",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {storyData.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
