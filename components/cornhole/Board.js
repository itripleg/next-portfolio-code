import React from "react";

function Board(props) {
  return (
    <div className={`${props.color} h-36 w-20 text-center p-2 row-start-2`}>
      {props.name}
    </div>
  );
}

export default Board;
