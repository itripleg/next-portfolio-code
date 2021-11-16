import Login from "../components/insta/Login";
import { useSession, signOut } from "next-auth/react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/insta/Header"));
const Feed = dynamic(() => import("../components/insta/Feed"));
import { RecoilRoot } from "recoil";
import Modal from "../components/insta/Modal";

function Insta() {
	const { data: session } = useSession();
	// Blocks all access to Insta app unless logged in initially
	if (!session) return <Login />;
	return (
		<RecoilRoot>
			<div className="">
				<Header />
				<Modal />
				<Feed />
			</div>
		</RecoilRoot>
	);
}

export default Insta;
