import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "../components/3d/Scene";
import BillboardMenu from "../components/3d/BillboardMenu";
import House from "../components/3d/House";
import Hydrant from "../components/3d/Hydrant";
import { Environment, Image } from "@react-three/drei";
// import { Billboard, Text, Plane } from "@react-three/drei";\

function Three() {
  return (
    <>
      <div className="p-6 lg:p-28 bg-black min-h-screen flex flex-col justify-center gap-4">
        <p className="text-white text-center">
          First attempt to make a 3D interactive menu with working links. I made
          the "House" model using blender, and react-three/drei to get the model
          into a scene. Pinch/scrool to zoom.
        </p>
        <div className="bg-gray-900 border h-[500px]">
          <Canvas gl={{ antialias: false }}>
            <Suspense>
              <Scene />
              <Environment
                // preset="studio"
                // background
                files={"./milky.hdr"}
                path={"/"}
              />
              <BillboardMenu />

              <House />
            </Suspense>
          </Canvas>
        </div>
        {/* <button className="bg-white h-20">Rotate the House</button> */}
        <p className="text-white text-center">
          A random fire hydrant I made.🤷🏾‍♂️
        </p>
        <div className="bg-gray-900 border h-[500px] p-4 lg:p-28">
          <Canvas>
            <Suspense>
              <Scene />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default Three;
