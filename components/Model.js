import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useState } from "react";

const Model = () => {
  const [position, setPosition] = useState([1, 1, 1]);

  const gltf = useLoader(GLTFLoader, "lil_house.glb");
  const controlRef = useRef(null);
  const { camera, gl } = useThree();

  useFrame(() => {
    camera.position.set([10, 10, 10]);
    controlRef.current.update();
  });

  // camera.lookAt(position);

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

export default Model;
