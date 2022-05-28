import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

function Suggestions() {
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const arr = [...Array(5)].map((_, i) => ({
			...faker.helpers.userCard(),
			id: i,
		}));
		//remember to do this before returning!
		setSuggestions(arr);
		return () => {};
	}, []);

	return (
		<div className="mt-4 ml-10">
			<div className="flex justify-between text-sm mb-5">
				<h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
				<button className="text-gray-600 font-semibold">See all</button>
			</div>
			{suggestions.map((profile) => (
				<div
					key={profile.id}
					className="flex items-center justify-between mt-3"
					alt="profile.id"
				>
					<img
						src={profile.avatar}
						className="w-12 h-12 rounded-full border p-[2px]"
						alt=""
					/>
					<div className="flex-1 ml-4">
						<h2>{profile.username}</h2>
						<h3 className="text-xs text-gray-400">
							Works at {profile.company.name}
						</h3>
					</div>
					<button className="text-xs font-bold text-blue-400">Follow</button>
				</div>
			))}
		</div>
	);
}

export default Suggestions;
