import { MoralisProvider } from "react-moralis";
// import CleanWeb3 from "../components/web3/CleanWeb3";
import RnD from "../components/RnD";

const appId = "REyr2sTyKaApzCp9B5RZgKYbrBLQT7bmO5Zow0AG";
const serverUrl = "https://8ztahdupkaup.grandmoralis.com:2053/server";

function Web3() {
  return (
    <div>
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        {/*<CleanWeb3 />*/}
        <RnD />
      </MoralisProvider>
    </div>
  );
}

export default Web3;
