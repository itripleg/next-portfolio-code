import Image from "next/image";
import { useSession } from "next-auth/react";

function UserImage() {
	const { data: session } = useSession();
	if (!session) return;
	if (session.provider.name === "facebook") {
		url = `https://graph.facebook.com/me/picture?access_token= ${session.accessToken}`;
		return <Image src={url} alt="Profile" />;
	}
	return <Image src={session.user.image} alt="Profile" />;
}

export default UserImage;
