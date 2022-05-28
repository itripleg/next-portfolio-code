// import faker from "faker";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
	const [profiles, setProfiles] = useState([]);
	const { data: session } = useSession();

	useEffect(() => {
		//Investigate: how are we returning the index of array with '(_,i)' as the first parameter of map?
		const arr = [...Array(20)].map((_, i) => ({
			...faker.helpers.userCard(),
			id: i,
		}));
		//remember to do this before returning!
		setProfiles(arr);
		return () => {};
	}, []);
	return (
		<div className="">
			<div
				// hide scrollbar and enable mouse whell on x axis
				className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 
				border rounded-md overflow-x-scroll "
			>
				{/*render current user story before map*/}
				{session && (
					<Story img={session.user.image} username={session.user.name} />
				)}
				{profiles.map((profile) => (
					// <p>{profile.name}</p>
					<Story
						key={profile.id}
						img={profile.avatar}
						username={profile.username}
						className=""
					/>
				))}
			</div>
		</div>
	);
};

export default Stories;
