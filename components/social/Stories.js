import StoryCard from "./StoryCard";
import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker/locale/en_US";
import { useSession } from "next-auth/react";

function Stories() {
  const [stories, setStories] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const arr = [...Array(4)].map((_, i) => ({
      ...{
        key: i,
        name: `${faker.name.firstName()}`,
        // avatar: `${faker.image.avatar()}`,
        bg: `${faker.image.nature(200, 200, true)}`,
      },
      id: i,
    }));
    //remember to do this before returning!
    setStories(arr);
    return () => {};
  }, []);

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
          src={story.bg}
          profile={story.bg}
        />
      ))}
    </div>
  );
}

export default Stories;
