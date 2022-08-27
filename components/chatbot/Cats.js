import Image from "next/image";

function Cats() {
  return (
    <div className="">
      <Image
        width={100}
        height={100}
        src={"https://cataas.com/cat/gif"}
        title={"Cat GIF"}
      />
    </div>
  );
}

export default Cats;
