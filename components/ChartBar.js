import Link from "next/link";

const ChartBar = () => {
  return (
    <>
      <div className="max-h-[545px] overflow-y-auto">
        <div className="grid p-3 w-full gap-2">
          <p className="text-white text-center">Recent Posts</p>
          <Link href={"/ta_pic5.png"}>
            <img src="/ta_pic5.png" className="chart-pic"></img>
          </Link>
          {/* <div className="text-center text-green-200"> */}
          {/* <p>August 8th 2020</p> */}
          {/* onClick={() => window.open("/ta_pic2.png", "_blank")} */}
          <Link href={"/ta_pic.png"}>
            <img src="/ta_pic.png" className="chart-pic"></img>
          </Link>
          {/* </div> */}
          <Link href={"/ta_pic3.png"}>
            <img src="/ta_pic3.png" className="chart-pic"></img>
          </Link>
          <Link href={"/ta_pic2.png"}>
            <img src="/ta_pic2.png" className="chart-pic"></img>
          </Link>
          <Link href={"/ta_pic4.png"}>
            <img src="/ta_pic4.png" className="chart-pic"></img>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChartBar;
