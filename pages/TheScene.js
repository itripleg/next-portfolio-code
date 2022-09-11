import React from "react";
import { Canvas } from "@react-three/fiber";
import Office from "../components/3d/Office";
import { useRef } from "react";
import {
  PerspectiveCamera,
  OrbitControls,
  Box,
  Environment,
  SpotLight,
} from "@react-three/drei";
import * as THREE from "three";

function TheScene() {
  const controlRef = useRef(null);
  const lightRef = useRef(null);
  const camRef = useRef(null);

  function rotate() {
    lightRef.current.rotation.x = new THREE.Euler(1, 1, 1);
  }

  return (
    <>
      <div className="bg-black min-h-[100vh]">
        <div className="h-[75vh] bg-black p-8">
          <Canvas>
            <Office />
            {/* <Box /> */}
            <OrbitControls ref={controlRef} />
            <SpotLight
              ref={lightRef}
              position={[0, 1, 0]}
              distance={20}
              angle={0.5}
              attenuation={50}
              anglePower={0.1}
            />
            {/* <ambientLight /> */}
            <PerspectiveCamera ref={camRef} makeDefault position={[0, 4, 2]} />
          </Canvas>
          <div>
            <p className="text-white">Spot Light</p>
          </div>
          <button
            className="bg-blue-800 p-2 m-2"
            onClick={() => {
              lightRef.current.position.x += 1;
            }}
          >
            X +
          </button>
          <button
            className="bg-blue-800 p-2 m-2"
            onClick={() => {
              lightRef.current.position.x -= 1;
            }}
          >
            X -
          </button>
          <button
            className="bg-blue-800 p-2 m-2"
            onClick={() => {
              lightRef.current.position.y += 1;
            }}
          >
            Y +
          </button>{" "}
          <button
            className="bg-blue-800 p-2 m-2"
            onClick={() => {
              lightRef.current.position.y -= 1;
            }}
          >
            Y -
          </button>
          <button
            className="bg-blue-800 p-2 m-2"
            onClick={() => {
              lightRef.current.position.z += 1;
            }}
          >
            Z +
          </button>{" "}
          <button
            className="bg-blue-800 p-2 m-2"
            onClick={() => {
              lightRef.current.position.z -= 1;
            }}
          >
            Z -
          </button>
          <button
            className="bg-blue-800 p-2 m-2"
            onClick={() => {
              rotate();
            }}
          >
            Rotate
          </button>
          <button
            className="bg-blue-800 p-2 m-2"
            onClick={() => {
              lightRef.current.position.set(0, 11, 0);
              lightRef.current.target.position.x = [0];
              lightRef.current.target.position.y = [0];
              lightRef.current.target.position.z = [0];
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default TheScene;
