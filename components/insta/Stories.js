import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
	const [profiles, setProfiles] = useState([]);

	useEffect(() => {
		//Investigate: how are we returning the index of array with '(_,i)' as the first parameter of map?
		const arr = [...Array(20)].map((_, i) => ({
			...faker.helpers.contextualCard(),
		}));
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
