import React from "react";
import Image from "next/image";
import UserImage from "../../components/UserImage";
import MyDropDown from "../MyDropDown";
// import DropDown from "../components/DropDown";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <div className="sticky bg-white flex items-center p-2 md: px-5 shadow-md">
      {/*Left*/}
      <div className="flex items-center">
        <img
          src={"/Facebook-logo.png"}
          width={80}
          height={80}
          // layout="sticky"
          alt="Fakebook Logo"
        />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6" />
          <input
            className="flex ml-2 items-center flex-shrink hidden md:inline-flex
          bg-transparent outline-none placeholder-gray-500 block focus:ring-0 border-gray-100"
            type="text"
            placeholder="Search..."
          ></input>
        </div>
      </div>

      {/*Middle*/}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <Link href="/Portfolio#projects" passHref={true}>
            <a>
              <HeaderIcon active Icon={HomeIcon} />
            </a>
          </Link>
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/*Right*/}
      <div className="flex items-center sm:space-x-2 justify-end relative">
        {/*Profile Pic*/}
        <UserImage
          onClick={signOut()}
          src={session.user.image}
          className="rounded-full cursor-pointer text-xs"
          width={40}
          height={40}
          alt="Signout"
        />

        <p className="hidden xl:inline-flex whitespace-nowrap font-semibold pr-3">
          {session.user.name}
        </p>
        <div className="flex-shrink space-x-2">
          <ViewGridIcon className="icon" />
          <ChatIcon className="icon" />
          <BellIcon className="icon" />
          {/*<DropDown />*/}
          <MyDropDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
