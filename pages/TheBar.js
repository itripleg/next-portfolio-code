import React from "react";
import Bar from "../components/3d/Bar";
import Speakers from "../components/3d/Speakers";
import Chibi from "../components/3d/Chibi";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Image,
  OrbitControls,
  AmbientLight,
} from "@react-three/drei";
import { useRef } from "react";

function TheBar() {
  const speakerRef = useRef(null);
  if (!!speakerRef) {
    console.log(speakerRef);
  }
  return (
    <div className="bg-black min-h-screen h-screen px-6 lg:px-12 pb-8 text-gray-200">
      Welcome to The Bar
      <Canvas>
        <Suspense>
          <Environment preset="sunset" />
          <OrbitControls />
          <Bar />
          <Speakers position={[-5, 0, -5]} />
          <Chibi position={[0.4, 0, -2]} scale={3.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default TheBar;
