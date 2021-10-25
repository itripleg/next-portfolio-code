import React from "react";
import Image from "next/image";

function Contact(src, name) {
	return (
		<div>
			<p>{name}</p>
			<img src={src} alt />
		</div>
	);
}

export default Contact;
