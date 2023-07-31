import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  SpotLight,
  Environment,
  Plane,
} from "@react-three/drei";
import LesPaul from "./LesPaul";
import Drums from "./Drums";
import Mic from "./Mic";
import Bass from "./Bass";
import Vibes from "./Vibes";

import gsap from "gsap";

function Scene() {
  const camRef = useRef();
  const spotRef = useRef();
  const lightRef = useRef();
  const controlRef = useRef();

  useFrame((state) => {
    // gsap
    //   .timeline()
    //   .to(spotRef.current.target.position, {
    //     x: -90,
    //     y: 10,
    //     z: 0,
    //     duration: 10,
    //   })
    //   .to(spotRef.current.target.position, {
    //     x: 90,
    //     y: 10,
    //     z: 0,
    //     duration: 10,
    //   });
    // console.log(lightRef.current.target.position);
    // lightRef.current.target.position.x = state.mouse.x * 10;
    // lightRef.current.target.position.z = state.mouse.y * -17;
  });
  console.log(controlRef.current);
  return (
    <>
      <ambientLight intensity={1} />
      <Environment preset="night" />
      <SpotLight
        ref={lightRef}
        position={[0, 10, 0]}
        color={"white"}
        angle={0.3}
        intensity={9}
        attenuation={5}
        distance={50}
        anglePower={5}
      />
      {/* background animated spotlights */}
      {/* <SpotLight
        ref={spotRef}
        position={[0, 0, -20]}
        color={"green"}
        angle={1}
        intensity={9}
        attenuation={5}
        distance={50}
        anglePower={5}
        // rotation={(0, 0, 0)}
      /> */}
      <directionalLight position={[9, 6, -7]} />
      {/* <PerspectiveCamera makeDefault position={[0, 11, 8]} /> */}
      {/* <OrbitControls target={[0, 2, -3]} /> */}
      <PerspectiveCamera makeDefault position={[0, 11, 8]} />
      <OrbitControls
        ref={controlRef}
        target={[0, 4, 0]}
        autoRotate={true}
        autoRotateSpeed={-0.1}
        maxAzimuthAngle={0.8}
        minAzimuthAngle={-1.5}
        maxPolarAngle={1.9}
        minPolarAngle={-180}
        maxDistance={40}
        minDistance={-1}
        enablePan={false}
      />
      <LesPaul
        position={[5, 0, -3]}
        onPointerOver={(e) => {
          console.log("cursor hover-over", lightRef);
          document.getElementById("message").innerHTML = "Josh Hell wuz here.";
          gsap.to(lightRef.current.target.position, {
            x: 6,
            y: 2.2,
            z: -2.2,
            duration: 3,
          });
          // gsap.to(lightRef.current, {
          //   intensity: 15,
          //   duration: 1.5,
          // });

          gsap.to(controlRef.current.target, {
            x: 6,
            y: 2.2,
            z: -2.2,
            duration: 1.5,
          });
        }}
      />
      <Drums
        scale={0.0018}
        position={[2, 1, -6]}
        onPointerOver={(e) => {
          console.log("cursor hover-over", lightRef);
          document.getElementById("message").innerHTML =
            "Where is our drummer, Explodotron?";

          gsap.to(lightRef.current.target.position, {
            x: 0,
            y: 0,
            z: -8,
            duration: 3,
          });

          gsap.to(controlRef.current.target, {
            x: 0,
            y: 0,
            z: -8,
            duration: 1.5,
          });
        }}
      />
      <Mic
        onPointerOver={(e) => {
          console.log("cursor hover-over", lightRef);
          document.getElementById("message").innerHTML =
            "Portia B, probably out cutting someone.";
          gsap.to(lightRef.current.target.position, {
            x: 0,
            y: 0,
            z: 0,
            duration: 3,
          });

          gsap.to(controlRef.current.target, {
            x: 0,
            y: 7,
            z: 0,
            duration: 1.5,
          });
        }}
      />
      <Bass
        scale={0.047}
        position={[-6, 0.8, -2.5]}
        onPointerOver={(e) => {
          console.log("cursor hover-over", lightRef);
          document.getElementById("message").innerHTML =
            "Reverend Billy Tylenöl is away from his holy bass.";
          gsap.to(lightRef.current.target.position, {
            x: -6,
            y: 1.3,
            z: -2,
            duration: 3,
          });

          gsap.to(controlRef.current.target, {
            x: -6,
            y: 1.3,
            z: -2,
            duration: 1.5,
          });
        }}
      />
      <Vibes
        position={[-1, 2, -11]}
        onPointerOver={(e) => {
          console.log("cursor hover-over", lightRef);
          document.getElementById("message").innerHTML =
            "Bad Vibes is a punk band out of Asheville NC.";
        }}
      />
      {/* <Plane args={[8, 8, 2]} rotation={[2, 0, 0]} /> */}
    </>
  );
}

export default Scene;
