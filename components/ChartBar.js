import Link from "next/link";

const ChartBar = () => {
  return (
    <>
      <div className="grid p-2 w-full gap-2">
        <p className="text-white text-center">Recent Posts</p>
        {/* <div className="text-center text-green-200"> */}
        {/* <p>August 8th 2020</p> */}
        <Link href={"/ta_pic.png"}>
          <img src="/ta_pic.png" className="chart-pic"></img>
        </Link>
        {/* </div> */}
        <Link href={"/ta_pic2.png"}>
          <img src="/ta_pic2.png" className="chart-pic"></img>
        </Link>
        <Link href={"/ta_pic3.png"}>
          <img src="/ta_pic3.png" className="chart-pic"></img>
        </Link>
      </div>
    </>
  );
};

export default ChartBar;
