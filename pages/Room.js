import React from "react";
import BillboardMenu from "../components/3d/BillboardMenu";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Office from "../components/3d/Office";
import { useRef, Suspense, useEffect } from "react";

import {
  Html,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  FlyControls,
  AmbientLight,
} from "@react-three/drei";

function Menu() {
  const controlRef = useRef(null);
  const cameraRef = useRef(null);
  console.log(controlRef);
  console.log(cameraRef);

  return (
    <>
      <div className="min-h-screen h-screen bg-black p-6 lg:p-16 ">
        <h1 className="text-white text-3xl lg:text-6xl p-2 text-center">
          {/* BUNCOMBE.TECH */}
        </h1>
        <div className="flex h-2/3 justify-center">
          <Canvas>
            <Suspense>
              <OrbitControls
                ref={controlRef}
                autoRotate={false}
                makeDefault
                // position={[-20, -20, -20]}
                maxAzimuthAngle={0.5}
                minAzimuthAngle={-2}
                maxPolarAngle={2}
                minPolarAngle={-180}
              />
              {/* <FlyControls /> */}
              {/* <PerspectiveCamera makeDefault position={[-2, 15, 3]} /> */}
              <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                position={[-4, 15, 3]}
                zoom={1.2}
                rotation={[20, 2, 0]}
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
