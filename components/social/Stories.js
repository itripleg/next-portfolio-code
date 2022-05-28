import StoryCard from "./StoryCard";
import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { useSession } from "next-auth/react";

function Stories() {
  const [stories, setStories] = useState([]);
  const { data: session } = useSession();
  const arr = []


	// useEffect(() => {
  //   let i;
  //   for (i = 0; i < 4; i++) {
  //     const card = {"key":i, "name":`${faker.name.firstName()}`, "avatar":`${faker.image.avatar()}`}
  //     arr.push(card);
  //     console.log(arr[i])
  //   }
  //   setStories(arr)
	// 	return () => {};
	// }, []);


  // setStories(arr)

  
    return (
      //Logged in user
      <div className="flex justify-center space-x-3 mx-auto">
        
        <StoryCard
          name={session.user.name}
          src={session.user.image}
          profile={session.user.image}
        />

        {stories?.map((story) => (
          <StoryCard
            key={story.id}
            name={story.name}
            src={story.avatar}
            profile={story.avatar}
          />
        ))}
      </div>
  );
}

export default Stories;
