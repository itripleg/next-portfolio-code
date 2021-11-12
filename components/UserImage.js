import Image from "next/image";
import { useSession } from "next-auth/react";

function UserImage(props) {
	const { data: session } = useSession();
	if (!session) return;
	if (session.provider.name === "facebook") {
		url = `https://graph.facebook.com/me/picture?access_token= ${session.accessToken}`;
		return (
			<Image
				className={props.className}
				src={url}
				width={props.width}
				height={props.height}
				layout={props.layout}
				alt={"Profile"}
			/>
		);
	}
	return (
		<Image
			className={props.className}
			src={session.user.image}
			width={props.width}
			height={props.height}
			layout={props.layout}
			alt={props.layout}
		/>
	);
}

export default UserImage;
