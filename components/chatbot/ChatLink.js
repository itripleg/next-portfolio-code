import Link from "next/link";

// import "./Link.css";

const ChatLink = ({ url, title }) => {
  return (
    <>
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="url-link"
      >
        <h1 className="url-header cursor-pointer underline italic p-2">
          Go to {title}
        </h1>
      </Link>
    </>
  );
};

export default ChatLink;
