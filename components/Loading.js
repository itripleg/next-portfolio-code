import React from "react";

function Loading(props) {
  return (
    <div className="text-center text-white text-5xl animate-pulse flex justify-center align-center place-items-center">
      {props.message}
    </div>
  );
}

export default Loading;
