import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "../components/3d/Scene";
// import House from "../components/3d/House";
import { Environment } from "@react-three/drei";

function Three() {
  return (
    <>
      <div className="p-28 bg-black min-h-screen flex flex-col justify-center ">
        <div className="bg-gray-900 border h-[500px]">
          <Canvas>
            <Suspense>
              <Scene />
              <Environment preset="sunset" />
            </Suspense>
          </Canvas>
        </div>
        <button className="bg-white h-20">Rotate the House</button>
      </div>
    </>
  );
}

export default Three;
