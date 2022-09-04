import React from "react";
import BillboardMenu from "../components/3d/BillboardMenu";
import { Canvas, useFrame } from "@react-three/fiber";
import Office from "../components/3d/Office";
import { Suspense } from "react";
import {
  Html,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  AmbientLight,
} from "@react-three/drei";
import Image from "next/image";
import Scene from "../components/3d/Scene";

function Menu() {
  return (
    <>
      <div className="min-h-screen h-screen bg-black p-6 lg:p-20 ">
        <h1 className="text-white text-3xl lg:text-6xl p-2 text-center">
          BUNCOMBE.TECH
        </h1>
        <div className="flex h-2/3 justify-center">
          {/* <Image src={"/stars.jpg"} layout="fill" /> */}
          <Canvas>
            <Suspense>
              {/* <Scene /> */}
              <OrbitControls autoRotate={false} />
              <PerspectiveCamera makeDefault position={[0, 0, 10]} />

              <Environment preset="sunset" />
              {/* <BillboardMenu /> */}
              <Office />
            </Suspense>
          </Canvas>
        </div>
        {/* <h1 className="text-white text-2xl lg:text-5xl p-2 text-center">
          This is a design test.
        </h1> */}
      </div>
    </>
  );
}

export default Menu;
