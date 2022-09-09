import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Image, OrbitControls } from "@react-three/drei";
import Scene from "../components/3d/Scene";
import BillboardMenu from "../components/3d/BillboardMenu";
import House from "../components/3d/House";
import Hydrant from "../components/3d/Hydrant";
import Bar from "../components/3d/Bar";
import Office from "../components/3d/Office";
// import { Billboard, Text, Plane } from "@react-three/drei";\

function Three() {
  return (
    <>
      <div className="p-6 lg:p-28 bg-black min-h-screen flex flex-col justify-center gap-4">
        <h1 className="warning-message pb-8">
          Note* these models are not optimized for performance on older smart
          phones. The models are best viewed using a computer.
        </h1>
        <p className="text-white text-center">
          First attempt to make a 3D interactive menu with working links. I made
          the "House" model using blender, and react-three/drei to get the model
          into a scene. Pinch/scrool to zoom. I will add on hover events to the
          menu panels soon.
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
        <div className="bg-gray-900 border h-[500px]">
          <Canvas>
            <Suspense>
              <Environment preset="sunset" background />
              <OrbitControls />
              <Hydrant />
            </Suspense>
          </Canvas>
        </div>
        <p className="text-white text-center">
          A lot of effort went into this model. I plan to have animations on
          different parts of the scene next.{" "}
          <a href="/Room" className="text-green-400">
            Full experience here.
          </a>
        </p>
        <div className="bg-gray-900 border h-[500px]">
          <Canvas>
            <Suspense>
              <Environment preset="dawn" />
              <OrbitControls
                // ref={controlRef}
                autoRotate={false}
                makeDefault
                rotateSpeed={0.2}
                maxAzimuthAngle={0.8}
                minAzimuthAngle={-1.5}
                maxPolarAngle={2}
                minPolarAngle={-180}
                maxZoom={1}
                maxDistance={20}
                target={[0.3, 3, 0]}
                panSpeed={0.1}
              />
              <Office />
            </Suspense>
          </Canvas>
        </div>
        <p className="text-white text-center">
          Random bar scene I made for practice speed modeling. Check out the{" "}
          <a href="/TheBar" className="text-green-400">
            full experience here.
          </a>{" "}
        </p>
        <div className="bg-gray-900 border h-[500px]">
          <Canvas>
            <Suspense>
              <Environment preset="lobby" />
              <OrbitControls
                // ref={controlRef}
                autoRotate={false}
                makeDefault
                rotateSpeed={0.2}
                maxAzimuthAngle={Infinity}
                minAzimuthAngle={Infinity}
                maxPolarAngle={2}
                minPolarAngle={-180}
                maxZoom={1}
                maxDistance={20}
                target={[0.3, 3, 0]}
                panSpeed={0.1}
              />
              <Bar />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default Three;
