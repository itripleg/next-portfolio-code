import Header from "../components/insta/Header";
import Feed from "../components/insta/Feed";

function Insta() {
	return (
		<div className="bg-gray-50 h-screen overflow-y-scroll">
			<Header />
			<Feed />
		</div>
	);
}

export default Insta;
