import Header from "../components/insta/Header";
import Feed from "../components/insta/Feed";
import Login from "../components/insta/Login";

function Insta() {
	return (
		<div className="bg-gray-50 h-screen overflow-y-scroll z-50 fixed top-0 w-full">
			<Header />
			<Feed />
		</div>
	);
}

export default Insta;
