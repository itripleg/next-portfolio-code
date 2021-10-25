import Image from "next/image";
import Link from "next/link";
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import Login from "./Login";
import { useSession, signOut } from "next-auth/react";

function Header() {
	const { data: session } = useSession();

	return (
		<div className="shadow-sm border-b bg-white sticky top-0 z-50">
			<div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
				{/*Left*/}
				<div className="relative hidden lg:inline-grid w-24 cursor-pointer">
					<Image
						src={"https://links.papareact.com/ocw"}
						layout="fill"
						objectFit="contain"
						alt="Instagram"
					/>
				</div>
				<div className="relative lg:hidden flex-shrink-0 w-10 cursor-pointer">
					<Image
						src={"https://links.papareact.com/jjm"}
						layout="fill"
						objectFit="contain"
						alt="Instagram"
					/>
				</div>
				{/*Middle - Search*/}
				<div className="max-w-sm">
					<div className="mt-1 relative items-center p-3 rounded-md ">
						<div className="absolute inset-y-0 flex items-center pointer-events-none">
							<SearchIcon className="h-5 w-5 text-gray-500 ml-1" />
						</div>
						<input
							className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 
						rounded-md focus:ring-black border "
							type="text"
							placeholder="Search"
						/>
					</div>
				</div>
				{/*Right*/}
				<div className="flex items-center justify-end space-x-4">
					<Link href="/">
						<a>
							<HomeIcon className="navBtn" />
						</a>
					</Link>
					<MenuIcon className="h-6 w-10 md:hidden cursor-pointer" />
					<div className="relative">
						<PaperAirplaneIcon className="navBtn rotate-45 mb-1" />
						<div
							className="hidden md:inline-flex absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full
						flex items-center justify-center animate-pulse text-white"
						>
							3
						</div>
					</div>
					<PlusCircleIcon className="navBtn" />
					<UserGroupIcon className="navBtn" />
					<HeartIcon className="navBtn pr-4" />
					<Image
						src={session.user.image}
						alt="Profile Pic"
						width={40}
						height={40}
						className=" rounded-full cursor-pointer"
						onClick={signOut}
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
