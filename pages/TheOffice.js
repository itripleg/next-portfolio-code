import React from "react";
import BillboardMenu from "../components/3d/BillboardMenu";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Office from "../components/3d/Office";
import Calendar from "../components/3d/Calendar";
import BirthdayPhone from "../components/3d/BirthdayPhone";
import { useRef, Suspense, useEffect, useCallback } from "react";
import gsap from "gsap";
import Loading from "../components/Loading";
import * as THREE from "three";
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
import { ClampToEdgeWrapping } from "three";

function TheOffice() {
  const computer = {
    position: [1.7686653839940332, 0.17240233937980984, 3.321559662084457],
    rotation: [-0.05185749699937346, 0.48873518085715373, 0.02436461486296877],
  };

  const euler = new THREE.Euler(0, 0.4, 0);
  console.log(euler);

  const controlRef = useRef(null);
  const cameraRef = useRef(null);
  const calendarRef = useRef(null);

  function rotateX() {
    cameraRef.current.rotation.x += 10;
  }

  function stopRotation() {
    controlRef.current.autoRotate = !controlRef.current.autoRotate;
  }

  function look(location, rotation) {
    console.log("looking at ", location + rotation);
    console.log(controlRef.current.object);
    // controlRef.current.object.position.set(0, 0, 0);
    controlRef.current.update();
    gsap
      .timeline()
      .to(controlRef.current.object.position, {
        x: location.x,
        y: location.y,
        z: location.z,
        duration: 1,
        onUpdate: controlRef.current.object.lookAt(0, 0, 0),
      })
      .to(controlRef.current.object.rotation, {
        x: rotation.x,
        y: rotation.y,
        z: rotation.z,
        duration: 2,
        onUpdate: controlRef.current.object.lookAt(0, 0, 0),
      });
  }

  const defaultControls = {
    position: {
      x: -5.296686848706756,
      y: 3.1161221172489957,
      z: 7.43098527985215,
    },
    rotation: {
      x: -0.2860685902862175,
      y: -0.36804752385248973,
      z: -0.105436136577787,
    },
  };
  function resetControls() {
    console.log(
      "resetting controls from " + controlRef.current.object.position
    );
    look(defaultControls.position, defaultControls.rotation);
  }

  function getPosition() {
    console.log(
      "controlRef.current.object.position={",
      controlRef.current.object.position.x +
        "," +
        controlRef.current.object.position.y +
        "," +
        controlRef.current.object.position.z,
      "}",
      controlRef.current.object
    );
    console.log(
      "controlRef.current.object.rotation={",
      controlRef.current.object.rotation.x +
        "," +
        controlRef.current.object.rotation.y +
        "," +
        controlRef.current.object.rotation.z,
      "}"
    );
  }

  function increaseX() {
    const controls = controlRef.current;
    // controlRef.current.position.x += 2;
    // controlRef.current.position.x += 2;
    // controlRef.current.update();
    // console.log(controlRef.current.position0.x);
    console.log((controls.object.position.x += 2));
  }

  function increaseY() {
    // controlRef.current.position.y += 2;
    console.log((controlRef.current.object.position.y += 2));
  }

  function increaseZ() {
    console.log((controlRef.current.object.position.z += 2));
  }

  // Decrease
  function decreaseX() {
    console.log((controlRef.current.object.position.x -= 2));
  }

  function decreaseY() {
    console.log((controlRef.current.object.position.y -= 2));
  }

  function decreaseZ() {
    console.log((controlRef.current.object.position.z -= 2));
  }

  function activateCalendar() {
    console.log("Calendar hover over");
  }

  return (
    <>
      <style jsx>{`
        button {
          display: none;
        }
      `}</style>

      <div className="min-h-screen h-screen bg-black p-6 lg:p-16 ">
        <h1 className="text-white text-3xl lg:text-6xl p-2 text-center">
          The Office
        </h1>
        <div className="flex h-1/2 justify-center">
          <Suspense fallback={<Loading message="Office Loading..." />}>
            <Canvas>
              <BirthdayPhone
                scale={0.5}
                position={[6.6, -3.4, -15.7]}
                rotation={new THREE.Euler(-1.6, 0, -0.51)}
              />
              <OrbitControls
                ref={controlRef}
                autoRotate={false}
                autoRotateSpeed={0.5}
                makeDefault
                rotateSpeed={0.2}
                maxAzimuthAngle={0.8}
                minAzimuthAngle={-1.5}
                maxPolarAngle={1.9}
                minPolarAngle={-180}
                maxDistance={40}
                minDistance={-1}
                // target={[0.3, 3, 0]}
                // rotation={{ x: 20, y: 20, z: 100 }}
                // rotation={[10, 10, 0]}
                panSpeed={0.1}
              />
              <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                position={[5, 52, 16]}
                zoom={1.4}
              />

              <Environment preset="dawn" />
              {/* <Plane ref={measuredRef} position={[0, 5, 0]} name="myPlane" /> */}
              <Office
                scale={2.5}
                position={[0, -8, 0]}
                rotation={new THREE.Euler(0, 0.4, 0)}
                // rotation={euler}
                // onPointerOver={(e) => console.log("over", e)}
              />
              <Calendar
                scale={2}
                position={[-12, 4, -11]}
                rotation={euler}
                onPointerOver={(e) => {
                  activateCalendar();
                }}
              />
            </Canvas>
          </Suspense>
        </div>
        {/* <h1 className="text-white text-2xl lg:text-5xl p-2 text-center">
          This is a design test.
        </h1> */}
        <div className="grid grid-cols-3 justify-center pt-2 gap-2">
          <button
            onClick={(e) => {
              resetControls();
            }}
            className="bg-white p-4 rounded-md"
          >
            Reset
          </button>

          <button
            onClick={(e) => {
              stopRotation();
            }}
            className="bg-white p-4 rounded-md"
          >
            AutoRotate
          </button>
          {/* X */}
          <div className="grid grid-cols-2 place-items-center col-start-1">
            <button
              onClick={(e) => {
                increaseX();
              }}
              className="bg-white p-4 rounded-md"
            >
              Increase X
            </button>
            <button
              onClick={(e) => {
                decreaseX();
              }}
              className="bg-white p-4 rounded-md"
            >
              Decrease X
            </button>
          </div>
          {/* Y */}
          <div className="grid gap-2 grid-cols-2 place-items-center">
            <button
              onClick={(e) => {
                increaseY();
              }}
              className="bg-white p-4 rounded-md"
            >
              Increase Y
            </button>
            <button
              onClick={(e) => {
                decreaseY();
              }}
              className="bg-white p-4 rounded-md"
            >
              Decrease Y
            </button>
          </div>

          {/* Z*/}
          <div className="grid gap-2 grid-cols-2 place-items-center">
            <button
              onClick={(e) => {
                increaseZ();
              }}
              className="bg-white p-4 rounded-md"
            >
              Increase Z
            </button>
            <button
              onClick={(e) => {
                decreaseZ();
              }}
              className="bg-white p-4 rounded-md"
            >
              decrease Z
            </button>
          </div>
          {/* Pan */}
          <div className="grid gap-2 grid-cols-2 place-items-center">
            <button
              className="rounded-md bg-white p-2"
              onClick={() => {
                controlRef.current.panSpeed += 1;
                console.log(controlRef.current.panSpeed);
              }}
            >
              Increase Pan
            </button>
            <button
              className="rounded-md bg-white p-2"
              onClick={() => {
                controlRef.current.panSpeed -= 1;
                console.log(controlRef.current.panSpeed);
              }}
            >
              Decrease Pan
            </button>{" "}
          </div>
          <button
            className="rounded-md bg-blue-300"
            onClick={() => {
              getPosition();
            }}
          >
            Get Position
          </button>
          <button
            className="rounded-md bg-white"
            onClick={() => {
              const position = {
                x: 0.41501893859990036,
                y: 2.7033281586031865,
                z: 0.6634752219184362,
              };
              const rotation = {
                x: -0.3271691925368589,
                y: 0.40380652356200825,
                z: 0.13256183695477058,
              };
              look(position, rotation);
            }}
          >
            Computer
          </button>
          <button
            className="rounded-md bg-white"
            onClick={() => {
              rotateX();
            }}
          >
            Rotate camera
          </button>
          <button
            className="rounded-md bg-white"
            onClick={() => {
              const location = {
                x: -6.64756965204667,
                y: -0.8540698452675518,
                z: 5.539987560534842,
              };
              const rotation = {
                x: -1,
                y: 0.1,
                z: 1,
              };
              look(location, rotation);
            }}
          >
            Guitar
          </button>
        </div>
      </div>
    </>
  );
}

export default TheOffice;
