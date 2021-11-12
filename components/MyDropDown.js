import React from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useState } from "react";

function MyDropDown() {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<div className="bg-gray-4-00">
			<ChevronDownIcon className="icon" />
			<div className="h-20 fixed z-40 bg-gray-400 w-28 x-4">
				<ul className="bg-gray-400">
					<li>Option 1 </li>
					<li>Option 2 </li>
					<li>Option 3 </li>
				</ul>
			</div>
		</div>
	);
}

export default MyDropDown;
