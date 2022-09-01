import { useFrame, useThree, extend, useLoader } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useRef } from "react";
import House from "./House";
import { Environment } from "@react-three/drei";

extend({ OrbitControls });

function Scene() {
  const controlRef = useRef(null);
  const { camera, gl } = useThree();

  useFrame(() => {
    controlRef.current.update();
  });

  return (
    <mesh>
      <ambientLight />
      <pointLight position={[15, 10, 10]} />
      <orbitControls
        ref={controlRef}
        args={[camera, gl.domElement]}
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
        autoRotateSpeed={1}
        autoRotate={true}
      />
      {/* <Environment files={"milky.hdr"} background /> */}
      <Environment preset="studio" background />
    </mesh>
  );
}

export default Scene;
