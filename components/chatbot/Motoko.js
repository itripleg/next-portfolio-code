import React from "react";

function Motoko() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("handling click");
  };

  return (
    <>
      {/* next comes our outer component wrapper
       which contains min screen size, padding/margin and bg-color */}
      <div className="w-full min-h-screen pb-8 bg-black">
        {/* next is our grid spaces to 12 collumns */}
        <div className="grid grid-cols-3 lg:grid-cols-12 items-end">
          {/* we place things inside the grid */}
          {/* <div className="text-white"><p>How did you find me?</p></div> */}
          <img
            src="/horror.jpg
          "
            className="col-span-full w-full max-h-[80vh]"
          ></img>
          <form className="col-span-full px-8">
            <div className="flex">
              <input
                className="text-center w-full"
                placeholder="How did you find me?"
                // onSubmit={handleClick}
              ></input>
              <button className="bg-green-800 p-2 ml-2" onClick={handleClick}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Motoko;
