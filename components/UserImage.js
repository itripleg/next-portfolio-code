import Image from "next/image";
import { useSession } from "next-auth/react";

function UserImage(width, height, layout, alt) {
	const { data: session } = useSession();
	if (!session) return;
	if (session.provider.name === "facebook") {
		url = `https://graph.facebook.com/me/picture?access_token= ${session.accessToken}`;
		return (
			<Image
				src={url}
				width={width}
				height={height}
				layout={layout}
				alt={"Profile"}
			/>
		);
	}
	return (
		<Image
			src={session.user.image}
			width={width}
			height={height}
			layout={layout}
			alt="Profile"
		/>
	);
}

export default UserImage;
