import React from "react";
import BillboardMenu from "../components/3d/BillboardMenu";
import { Canvas, useFrame } from "@react-three/fiber";
import Office from "../components/3d/Office";
import { useRef, Suspense } from "react";

import {
  Html,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  FlyControls,
  AmbientLight,
} from "@react-three/drei";
import Image from "next/image";
import Scene from "../components/3d/Scene";

function Menu() {
  const ref = useRef(null);
  const cameraRef = useRef(null);
  console.log(ref);
  console.log(cameraRef);
  const Update = () => {
    useFrame((state) => {
      // if (!!ref.current) {
      // const { x, y } = state.mouse;
      cameraRef.rotation.x += 10;
      cameraRef.update();
      // ref.current.setAzimuthalAngle(x * 2 * -1);
      // ref.current.setAzimuthalAngle(x * -3);
      // ref.current.update();
      // }
    });
  };
  return (
    <>
      <div className="min-h-screen h-screen bg-black p-6 lg:p-16 ">
        <h1 className="text-white text-3xl lg:text-6xl p-2 text-center">
          {/* BUNCOMBE.TECH */}
        </h1>
        <div className="flex h-2/3 justify-center">
          {/* <Image src={"/stars.jpg"} layout="fill" /> */}
          <Canvas>
            <Suspense>
              {/* <Scene /> */}
              <OrbitControls
                ref={ref}
                autoRotate={true}
                makeDefault
                // position={[-20, -20, -20]}
                // maxAzimuthAngle={0.5}
                // minAzimuthAngle={-2}
                polar={[0, Math.PI / 3]} // Vertical limits
              />
              {/* <FlyControls /> */}
              {/* <PerspectiveCamera makeDefault position={[-2, 15, 3]} /> */}
              <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                position={[0, 10, 0]}
                // rotation={[4, 3, 2]}
                // near={1}
                // far={100}
                // up={(0, 1, 0)}
              />

              <Environment preset="dawn" />
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
