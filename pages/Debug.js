import UserImage from "../components/UserImage";
import { useSession } from "next-auth/react";
import { useState } from "react";

export async function getServerSideProps(context) {
  const headers = {
    Authorization:
      "Bearer aec7a83bd90975bf0486c20e28c9846cfb2883c8dd5507666c489728ccf870598df22193cb7fa6ce057bd2a0bfbe35b8e10a0180e44cd5f93950b9611558f538bc39540ab2bd566cc05c5b027fe1a49ce80bd91e7612206418d25749ce19452d01e721134b1502f7515b0e5519a6d251691f70a2b8146421aaa7e746ebf22ffe",
  };

  const res = await fetch(`http://localhost:1337/api/Secrets`, { headers });
  const jsonResponse = await res.json();
  // console.log(jsonResponse);
  return {
    props: { jsonResponse }, // will be passed to the page component as props
  };
}

function Debug(jsonResponse) {
  const [reply, setReply] = useState(null);

  const handleClick = () => {
    setReply(jsonResponse);
    alert(reply);
    <ul>
      {[reply].map(
        (s) => (document.getElementById("results").innerHTML = <li>{s}</li>)
      )}
    </ul>;
  };

  console.log(jsonResponse);
  const { data: session } = useSession();
  const [visible, setVisible] = useState("false");

  function Movie(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  Movie.prototype.getOverview = function () {
    return `${this.title}, a ${this.genre} film directed by 
	${this.director}, was released in ${this.releaseYear}. 
	It has a rating of ${this.rating}`;
  };

  const JoshDev = new Movie(
    "Josh Devs",
    "Joshua Bell",
    "Documentary",
    "2022",
    "5/5"
  );

  console.log(JoshDev.title);

  return (
    <div className=" w-full bg-gradient-to-tl from-blue-500">
      {session && (
        <div>
          <p>
            Logged in as {session.user.name} via {session.provider}
          </p>
          <p>Email: {session.user.email}</p>
          <p>Expires: {session.expires}</p>
        </div>
      )}
      <div className="text-center">
        <p>Pretty hex Buttons do random stuff!</p>
        <p id="results" className=" text-sm italic">
          Results here
        </p>
        <div className="grid grid-cols-2 mx-auto gap-x-8 gap-y-8 max-w-7xl pt-8">
          <button
            className="h-20 bg-[#afaaaf] animate hover:scale-110"
            onClick={() => {
              handleClick();
            }}
          >
            #afaaaf httpGet
          </button>
          <button className="h-20 bg-[#40a0ff] animate hover:scale-110">
            #40a0ff
          </button>
          <button className="h-20 bg-[#ffffff] animate hover:scale-110">
            #ffffff
          </button>
          <button className="h-20 bg-[#aaaaaa] animate hover:scale-110">
            #aaaaaa
          </button>
          <button className="h-20 bg-[#ffaaff] text-white animate hover:scale-110">
            #ffaaff
          </button>
          <button className="h-20 bg-[#fabfab] text-white animate hover:scale-110">
            #fabfab
          </button>
          <button className="h-20 bg-[#deadaf] text-white animate hover:scale-110">
            #deadaf
          </button>
          <button className="h-20 bg-[#badbad] text-white animate hover:scale-110">
            #badbad
          </button>
          <button className="h-20 bg-[#cabbad] text-white animate hover:scale-110">
            #cabbad
          </button>
          <button className="h-20 bg-[#deadaf] text-white animate hover:scale-110">
            #deadaf
          </button>
          <button className="h-20 bg-[#beeeef] text-white animate hover:scale-110">
            #beeeef
          </button>
          <button className="h-20 bg-[#bedaff] text-white animate hover:scale-110">
            #bedaff
          </button>
          <button className="h-20 bg-[#444444] text-white animate hover:scale-110">
            #444444
          </button>
          <button className="h-20 bg-[#666666] text-white animate hover:scale-110">
            #666666
          </button>
          <button className="h-20 bg-[#777777] text-white animate hover:scale-110">
            #777777
          </button>
          <button className="h-20 bg-[#123456] text-white animate hover:scale-110">
            #123456
          </button>
          <button className="h-20 bg-[#321654] text-white animate hover:scale-110">
            #321654
          </button>
          <button className="h-20 bg-[#987654] text-white animate hover:scale-110">
            #987654
          </button>
        </div>
        <br />
        <div
          onClick={() => setVisible(!visible)}
          className={`flex transition-all ease-in-out duration-300 bg-gray-200 w-44 items-center justify-between px-2 rounded ${
            visible ? "opacity-100" : "opacity-100"
          }`}
        >
          <p>Optional rendering practice button</p>
          {visible ? <p>😁</p> : <p>😥</p>}
        </div>
        <div className="">
          <h1>grid practice</h1>
          <div className="myGrid grid grid-cols-3 grid-rows-2 gap-4">
            <div className="bg-red-500 col-span-3">Header</div>
            <div className="bg-blue-500 ">Side Bar</div>
            <div className="bg-green-500 ">Content</div>
            <div className="bg-yellow-500">Right Side</div>
            <div className="bg-purple-500 col-span-3">Footer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Debug;
