import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "../components/3d/Cube";

function Three() {
  return (
    <>
      <div className="wrapper">
        <Canvas>
          <Suspense>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default Three;
