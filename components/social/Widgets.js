import Contact from "./Contact";
import {
	DotsHorizontalIcon,
	SearchIcon,
	VideoCameraIcon,
} from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import faker from "faker";

function Widgets() {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		const arr = [...Array(10)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));
		//remember to do this before returning!
		setContacts(arr);
		return () => {};
	}, []);
	return (
		<div className="hidden lg:flex flex-col w-60 p-2 mt-6">
			<div className="flex justify-between items-center text-gray-500 mb-5">
				<h2 className="text-xl">Contacts</h2>
				<div className="flex space-x-2">
					<VideoCameraIcon className="h-6" />
					<SearchIcon className="h-6" />
					<DotsHorizontalIcon className="h-6" />
				</div>
			</div>
			{contacts.map((contact) => (
				<Contact key={contact.id} src={contact.avatar} name={contact.name} />
			))}
		</div>
	);
}

export default Widgets;
