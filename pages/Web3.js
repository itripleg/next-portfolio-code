import RnD from "../components/RnD";
import dynamic from "next/dynamic";

const MoralisProvider = dynamic(() =>
  import("react-moralis").then((mod) => mod.MoralisProvider)
);
const Web3Dash = dynamic(() => import("../components/web3/Web3Dash"));

const appId = "wEUEmQxrhOmeneVZAUCHOGK0YkUnTBtNkBK9De4h";
const serverUrl = "https://grzitwatvvsw.usemoralis.com:2053/server";

function Web3() {
  return (
    <div className="bg-transparent">
      {/*<RnD />*/}
      <h1 className="bg-yellow-600 flex justify-center py-4">
        Web3 Login temporarily disabled for maintanence.{" "}
      </h1>
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <Web3Dash />
      </MoralisProvider>
    </div>
  );
}

export default Web3;
