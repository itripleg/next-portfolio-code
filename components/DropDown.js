import Head from "next/head";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";

const DropDown = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { data: session } = useSession();
	<Head>
		<script
			src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
			defer
		></script>
	</Head>;
	return (
		<div className="flex justify-center ">
			<div x-data="{ dropdownOpen: true }" className=" ">
				<button
					onClick={() => setDropdownOpen(!dropdownOpen)}
					className=" block rounded-md bg-white p-2 focus:outline-none"
				>
					<ChevronDownIcon className="h-7 text-gray-600 cursor-pointer" />
				</button>

				{dropdownOpen && (
					<div
						x-show="dropdownOpen"
						className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl"
					>
						<a
							href="#"
							className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
						>
							your profile
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
						>
							Your projects
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
						>
							Help
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
						>
							Settings
						</a>
						<a
							href="#"
							onClick={() => signOut()}
							className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
						>
							Sign Out
						</a>
					</div>
				)}
			</div>
		</div>
	);
};
export default DropDown;
