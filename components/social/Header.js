import React from 'react'
import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import { signOut, useSession } from 'next-auth/client'
import {
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	HomeIcon,
	UserGroupIcon,
	ViewGridIcon
} from "@heroicons/react/solid"
import {
	FlagIcon,
	PlayIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline"
import Link from 'next/link'

const Header = () => {

	const [session] = useSession();

	return (
		<div className="sticky top-0 z-50 bg-white flex items-center p-2 md: px-5 shadow-md">				
			{/*Left*/}
			<div className="flex items-center">
				<Image
				src={"https://links.papareact.com/5me"}
				width={40} height={40} layout="fixed"
				alt="Fakebook.com"
				 />

				<div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
					<SearchIcon className="h-6"/>
					<input className="flex ml-2 items-center flex-shrink hidden md:inline-flex
					bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search Fakebook"></input>
				</div>
			</div>

			{/*Middle*/}
			<div className="flex justify-center flex-grow">
				<div className="flex space-x-6 md:space-x-2">
					<Link href="/" passHref={true}>
						<a>								
							<HeaderIcon active Icon={ HomeIcon } />
						</a>
					</Link>
					<HeaderIcon Icon={ FlagIcon }/>
					<HeaderIcon Icon={ PlayIcon }/>
					<HeaderIcon Icon={ ShoppingCartIcon }/>
					<HeaderIcon Icon={ UserGroupIcon }/>
				</div>
			</div>	

			{/*Right*/}
			<div className="flex items-center sm:space-x-2 justify-end">
				{/*Profile Pic*/}
				<Image 
					onClick={ signOut }
					src={ session.user.image }
					className="rounded-full cursor-pointer text-xs"
					width={40}
					height={40}
					layout=""
					alt="Signout"
				/>

				<p className="whitespace-nowrap font-semibold pr-3">{session.user.name}</p>
				<ViewGridIcon className="icon" />
				<ChatIcon className="icon" />
				<BellIcon className="icon" />
				<ChevronDownIcon className="icon" />
			</div>
		</div>
	)
}

export default Header