import dynamic from "next/dynamic";
import { useMoralis } from "react-moralis";

const Profile = dynamic(() => import("./Profile"));
const Login = dynamic(() => import("./Login"));

const Web3Dash = () => {
  const { isAuthenticated } = useMoralis();
  return <div>{isAuthenticated ? <Profile /> : <Login />}</div>;
};

export default Web3Dash;
