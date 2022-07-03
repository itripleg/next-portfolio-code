import { useFrame, useThree, extend, useLoader } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";
// import { Mesh } from "three";

extend({ OrbitControls, GLTFLoader });

function Cube() {
  const meshRef = useRef(null);
  const controlRef = useRef(null);
  const { camera, gl } = useThree();
  const house = useLoader(GLTFLoader, "/lil_house.glb");

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    controlRef.current.update();
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      {/* <boxGeometry args={[3.5, 3.5, 3.5]} /> */}
      <house />
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
    </mesh>
  );
}

export default Cube;
