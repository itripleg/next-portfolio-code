import React from "react";
import BillboardMenu from "../components/3d/BillboardMenu";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Image from "next/image";
import Scene from "../components/3d/Scene";

function Menu() {
  return (
    <>
      <div className="min-h-screen h-screen bg-black p-20 ">
        <h1 className="text-white text-3xl lg:text-6xl p-2 text-center">
          BUNCOMBE.TECH
        </h1>
        <div className="flex h-2/3 justify-center">
          {/* <Image src={"/stars.jpg"} layout="fill" /> */}
          <Canvas>
            <Suspense>
              <Scene />
              <BillboardMenu />
            </Suspense>
          </Canvas>
        </div>
        <h1 className="text-white text-2xl lg:text-5xl p-2 text-center">
          This is a design test.
        </h1>
      </div>
    </>
  );
}

export default Menu;
