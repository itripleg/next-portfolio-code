import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import Cube from "../components/3d/Cube";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./lil_house.glb");
  const controlRef = useRef(null);
  const { camera, gl } = useThree();

  useFrame(() => {
    controlRef.current.update();
  });

  return (
    <>
      <primitive object={gltf.scene} scale={2} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <meshStandardMaterial color="green" />
      <orbitControls
        ref={controlRef}
        args={[camera, gl.domElement]}
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
      />
    </>
  );
};

function Three() {
  return (
    <>
      <div className="h-screen flex flex-col items-center bg-blue-800">
        <h1 className="text-2xl text-bold p-8">
          My handrawn Blender animations!
        </h1>
        <p className="p-8 text-center">
          As you can probably tell, I'm a beginner with 3D modeling, but it'll
          be interesting to watch as I progress. Try zooming and spinning the
          model.
        </p>
        <br />
        <Canvas>
          {/* <Cube /> */}
          <Model />
        </Canvas>
      </div>
    </>
  );
}

export default Three;
