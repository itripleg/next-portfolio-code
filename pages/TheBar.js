import React from "react";
import Bar from "../components/3d/Bar";
import Speakers from "../components/3d/Speakers";
import Chibi from "../components/3d/Chibi";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loading from "../components/Loading";
import { useRef } from "react";
import * as THREE from "three";
import {
  Environment,
  OrbitControls,
  FirstPersonControls,
  PerspectiveCamera,
  SpotLight,
} from "@react-three/drei";

function TheBar() {
  const camRef = useRef(null);
  const controlRef = useRef(null);
  const lightRef = useRef(null);
  console.log(lightRef.current);

  function rotate() {
    console.log(lightRef.current.rotation.set);
    lightRef.current.rotation.set([
      (lightRef.current.rotation.x += 2),
      (lightRef.current.rotation.y += 2),
      (lightRef.current.rotation.z += 2),
    ]);
  }

  return (
    <>
      <button
        className="hidden bg-blue-800 p-2 w-20"
        onClick={() => {
          rotate();
        }}
      >
        rotate
      </button>
      <div className="bg-black min-h-screen h-screen px-6 lg:px-12 pb-8 text-gray-200 justify-center flex">
        <Suspense fallback={<Loading message="Welcome to The Bar" />}>
          <Canvas>
            <Environment preset="sunset" />
            <PerspectiveCamera position={[-5, 10, 30]} zoom={2} makeDefault />
            <OrbitControls ref={controlRef} target={[0, 0, 0]} />
            <SpotLight
              distance={5}
              angle={0.9}
              attenuation={5}
              anglePower={1} // Diffuse-cone anglePower (default: 5)
              position={[5, 6, -10]}
              ref={lightRef}
            />
            {/* <ambientLight /> */}
            <Bar />
            <Speakers position={[-5, 0, -5]} />
            <Chibi position={[0.4, 0, -2]} scale={3.5} />
          </Canvas>
        </Suspense>
      </div>
    </>
  );
}

export default TheBar;
