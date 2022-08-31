import { useFrame, useThree, extend, useLoader } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useRef } from "react";
import House from "./House";
import { Billboard } from "@react-three/drei";

extend({ OrbitControls });

function Scene() {
  const meshRef = useRef(null);
  const controlRef = useRef(null);
  const { camera, gl } = useThree();

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    controlRef.current.update();
    // meshRef.current.rotation.x += 0.01;
    // meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <ambientLight />
      <pointLight position={[15, 10, 10]} />
      {/* <meshStandardMaterial color="green" /> */}
      <orbitControls
        ref={controlRef}
        args={[camera, gl.domElement]}
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
        // position={[15, 10, 10]}
      />
    </mesh>
  );
}

export default Scene;
