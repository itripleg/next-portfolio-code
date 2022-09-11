import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Office from "../components/3d/Office";
import { useRef, useState } from "react";
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
  const [target, setTarget] = useState(lightRef);

  function rotate() {
    lightRef.current.rotation.x = new THREE.Euler(1, 1, 1);
  }

  useEffect(() => {
    console.log(target);
    document.getElementById("target").innerHTML = target;
  }, [target]);

  return (
    <>
      <div className="bg-black min-h-[100vh]">
        <div className="min-h-[50vh] h-[400px] bg-black p-8">
          <p id="target" className="text-white"></p>
          <Canvas>
            <Office />
            {/* <Box /> */}
            <OrbitControls ref={controlRef} />
            <SpotLight
              ref={lightRef}
              position={[0, 1, 0]}
              distance={100}
              angle={0.1}
              attenuation={5}
              anglePower={5}
              color={"blue"}
            />
            {/* <spotLight ref={lightRef} /> */}
            <ambientLight />
            {/* <pointLight position={[0, 100, -20]} /> */}
            <PerspectiveCamera ref={camRef} makeDefault position={[0, 4, 2]} />
          </Canvas>
          <div className="grid grid-cols-4 place-items-center">
            <p className="text-white">Position</p>
            <div className="grid grid-cols-2">
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
                  lightRef.current.position.set(0, 7, 0);
                  lightRef.current.target.position.x = [0];
                  lightRef.current.target.position.y = [0];
                  lightRef.current.target.position.z = [0];
                }}
              >
                Reset
              </button>
            </div>
            <p className="text-white">Target</p>
            <div className="grid grid-cols-2">
              <button
                className="bg-blue-800 p-2 m-2"
                onClick={() => {
                  lightRef.current.target.position.x += 0.5;
                  //   lightRef.current.target.position.y = [0];
                  //   lightRef.current.target.position.z = [0];
                }}
              >
                X +
              </button>
              <button
                className="bg-blue-800 p-2 m-2"
                onClick={() => {
                  lightRef.current.target.position.x -= 0.5;
                  //   lightRef.current.target.position.y = [0];
                  //   lightRef.current.target.position.z = [0];
                }}
              >
                X -
              </button>
              <button
                className="bg-blue-800 p-2 m-2"
                onClick={() => {
                  lightRef.current.target.position.y += 0.5;
                  //   lightRef.current.target.position.y = [0];
                  //   lightRef.current.target.position.z = [0];
                }}
              >
                Y +
              </button>
              <button
                className="bg-blue-800 p-2 m-2"
                onClick={() => {
                  lightRef.current.target.position.y -= 0.5;
                  //   lightRef.current.target.position.y = [0];
                  //   lightRef.current.target.position.z = [0];
                }}
              >
                Y -
              </button>
              <button
                className="bg-blue-800 p-2 m-2"
                onClick={() => {
                  lightRef.current.target.position.z += 0.5;
                  //   lightRef.current.target.position.y = [0];
                  //   lightRef.current.target.position.z = [0];
                }}
              >
                Z +
              </button>
              <button
                className="bg-blue-800 p-2 m-2"
                onClick={() => {
                  lightRef.current.target.position.z -= 0.5;
                  //   lightRef.current.target.position.y = [0];
                  //   lightRef.current.target.position.z = [0];
                }}
              >
                Z -
              </button>
              <button
                className="bg-blue-800 p-2 m-2 col-span-2"
                onClick={() => {
                  setTarget((lightRef.current.target.position.z += 1));
                }}
              >
                Set Target
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheScene;
