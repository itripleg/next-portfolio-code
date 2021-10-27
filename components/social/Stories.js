import StoryCard from "./StoryCard";
import { useState, useEffect } from "react";
import faker from "faker";
import { useSession } from "next-auth/react";

function Stories() {
  const [stories, setStories] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const arr = [...Array(4)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    //remember to do this before returning!
    setStories(arr);
    return () => {};
  }, []);
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      <StoryCard
        name={session.user.name}
        src={session.user.image}
        profile={session.user.image}
      />
      {stories.map((story) => (
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
