import React from "react";
import { Billboard, Plane, Text, Html } from "@react-three/drei";
import Image from "next/image";

function BillboardMenu() {
  const args = {
    follow: true,
    lockX: false,
    lockY: false,
    lockZ: false,
  };
  return (
    <>
      <Billboard
        follow={args.follow}
        lockX={args.lockX}
        lockY={args.lockY}
        lockZ={args.lockZ}
        position={[-4, -2, 0]}
      >
        <Plane
          args={[3, 2]}
          material-color="black"
          onClick={() => {
            window.location.href = "/Portfolio#projects";
          }}
        />
        <Text
          fontSize={0.4}
          outlineWidth={"1%"}
          outlineColor="#000000"
          outlineOpacity={1}
        >
          Projects
        </Text>
      </Billboard>
      {/* <a href="buncombe.tech"> */}
      <Billboard
        follow={args.follow}
        lockX={args.lockX}
        lockY={args.lockY}
        lockZ={args.lockZ}
        position={[-4, 2, 0]}
      >
        <Plane
          args={[3, 2]}
          material-color="red"
          onClick={() => {
            window.location.href = "/Portfolio#contact";
          }}
        />
        <Text
          fontSize={0.4}
          outlineWidth={"1%"}
          outlineColor="#000000"
          outlineOpacity={1}
        >
          Contact
        </Text>
        {/* <Html>
          <Image src="/me.jpg" width={100} height={100} />
        </Html> */}
      </Billboard>
      {/* </a> */}
      <Billboard
        follow={args.follow}
        lockX={args.lockX}
        lockY={args.lockY}
        lockZ={args.lockZ}
        position={[0, 0, 0]}
      >
        {/* <Plane args={[3, 2]} material-color="green" /> */}
      </Billboard>
      <Billboard
        follow={args.follow}
        lockX={args.lockX}
        lockY={args.lockY}
        lockZ={args.lockZ}
        position={[4, -2, 0]}
      >
        <Plane
          args={[3, 2]}
          material-color="red"
          onClick={() => {
            window.location.href = "https://github.com/itripleg";
          }}
        />
        <Text
          fontSize={0.4}
          outlineWidth={"1%"}
          outlineColor="#000000"
          outlineOpacity={1}
        >
          GitHub
        </Text>
      </Billboard>
      <Billboard
        follow={args.follow}
        lockX={args.lockX}
        lockY={args.lockY}
        lockZ={args.lockZ}
        position={[4, 2, 0]}
      >
        <Plane
          args={[3, 2]}
          material-color="black"
          onClick={() => {
            window.location.href = "/Noir";
          }}
        />
        <Text
          fontSize={0.4}
          outlineWidth={"1%"}
          outlineColor="#000000"
          outlineOpacity={1}
        >
          ChatBot
        </Text>
      </Billboard>
    </>
  );
}

export default BillboardMenu;
