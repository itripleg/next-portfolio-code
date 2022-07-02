import { Canvas } from "@react-three/fiber";
import Cube from "../components/3d/Cube";

function Three() {
  return (
    <>
      <div className="flex flex-col mx-auto bg-blue-800 min-h-screen">
        <div className="flex mx-auto">Animations using Three.js!</div>
        <Canvas>
          <Cube />
        </Canvas>
      </div>
    </>
  );
}

export default Three;
