import { useState } from "react";

export const getServerSideProps = async () => {
  const headers = {
    Authorization:
      "Bearer aec7a83bd90975bf0486c20e28c9846cfb2883c8dd5507666c489728ccf870598df22193cb7fa6ce057bd2a0bfbe35b8e10a0180e44cd5f93950b9611558f538bc39540ab2bd566cc05c5b027fe1a49ce80bd91e7612206418d25749ce19452d01e721134b1502f7515b0e5519a6d251691f70a2b8146421aaa7e746ebf22ffe",
  };
  const res = await fetch("http://localhost:1337/api/Secrets", { headers });
  const jsonReply = await res.json();
  console.log(jsonReply.data);
  return {
    props: { jsonReply },
  };
};

function Strapi({ jsonReply }) {
  //   console.log(jsonReply.data);
  function handleClick() {}
  if (jsonReply.data) {
    // let j = JSON.stringify(jsonReply);
    // j.map();
    console.log(jsonReply.data);
  }
  return (
    <>
      <div>Results</div>
      <button className="p-2 bg-blue-400 rounded-md" onClick={handleClick}>
        {" "}
        Process{" "}
      </button>
    </>
  );
}

export default Strapi;
