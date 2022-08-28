import Image from "next/image";

function Cats() {
  return (
    <div className="max-h-2/3">
      <Image
        width={100}
        height={100}
        layout="responsive"
        src={"https://cataas.com/cat/gif"}
        title={"Cat GIF"}
        className=""
      />
    </div>
  );
}

export default Cats;
