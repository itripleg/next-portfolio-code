import React from "react";
import BillboardMenu from "../components/3d/BillboardMenu";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Office from "../components/3d/Office";
import { useRef, Suspense, useEffect, useCallback } from "react";
import gsap from "gsap";
import Loading from "../components/Loading";
import {
  Html,
  Environment,
  OrbitControls,
  PresentationControls,
  PerspectiveCamera,
  FlyControls,
  AmbientLight,
  Plane,
} from "@react-three/drei";

function TheOffice() {
  const controlRef = useRef(null);
  const cameraRef = useRef(null);
  const planeRef = useRef(null);
  console.log(controlRef);
  console.log(cameraRef);

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      console.log("node value changed:");
      console.log(node);
      gsap.to(node.position, { x: 20, duration: 20 });
    }
  });

  return (
    <>
      <div className="min-h-screen h-screen bg-black p-6 lg:p-16 ">
        <h1 className="text-white text-3xl lg:text-6xl p-2 text-center">
          {/* BUNCOMBE.TECH */}
        </h1>
        <div className="flex h-2/3 justify-center">
          <Suspense fallback={<Loading message="Now loading The Office..." />}>
            <Canvas>
              <PresentationControls
                global
                zoom={0.8}
                rotation={[0, -Math.PI / 4, 0]}
                polar={[0, Math.PI / 4]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
              />
              <OrbitControls
                ref={controlRef}
                autoRotate={true}
                autoRotateSpeed={0.25}
                makeDefault
                rotateSpeed={0.2}
                maxAzimuthAngle={0.8}
                minAzimuthAngle={-1.5}
                maxPolarAngle={1.9}
                minPolarAngle={-180}
                maxZoom={1}
                maxDistance={20}
                target={[0.3, 3, 0]}
                panSpeed={0.1}
              />
              {/* <FlyControls /> */}
              {/* <PerspectiveCamera makeDefault position={[-2, 15, 3]} /> */}
              <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                position={[0, 13.808871804688835, 10.5]}
                zoom={1.4}
                rotation={{ x: 20, y: 20, z: 100 }}
              />

              <Environment preset="dawn" />
              {/* <BillboardMenu /> */}
              {/* <Plane ref={measuredRef} position={[0, 5, 0]} name="myPlane" /> */}

              {/* <Office ref={React.forwardRef(() => {}, measuredRef)} /> */}
              <Office position={[0, 0, 0]} rotation={[0, 0.4, 0]} />
              {/* <BillboardMenu
                ref={React.forwardRef(() => {})}
                position={[0, 0, 0]}
              /> */}
            </Canvas>
          </Suspense>
        </div>
        {/* <h1 className="text-white text-2xl lg:text-5xl p-2 text-center">
          This is a design test.
        </h1> */}
      </div>
    </>
  );
}

export default TheOffice;
