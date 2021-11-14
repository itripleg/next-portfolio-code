import Web3Main from "../components/web3/Web3Main";
import { MoralisProvider } from "react-moralis";
const appId = "REyr2sTyKaApzCp9B5RZgKYbrBLQT7bmO5Zow0AG";
const serverUrl = "https://8ztahdupkaup.grandmoralis.com:2053/server";

function Web3() {
  return (
    <div>
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <Web3Main />
      </MoralisProvider>
    </div>
  );
}

export default Web3;
