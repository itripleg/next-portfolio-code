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
          Here is some work in progress I'm experimenting on
        </h1>
        {/* <div className="bg-gradient-to-l from-white h-6 w-full mr-20"></div> */}
        {/* My cool links */}
        <div className="flex grid grid-cols-2 gap-12">
          <ul className="list-disc ">
            <p className="underline italic">My fullstack web tech</p>
            <li>
              <a
                target="_blank"
                href="https://nodejs.org/"
                rel="noopener noreferrer"
              >
                Node.js
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://nextjs.org/"
                rel="noopener noreferrer"
              >
                Next.js
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://yarnpkg.com/"
                rel="noopener noreferrer"
              >
                Yarn
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://tailwindcss.com/"
                rel="noopener noreferrer"
              >
                TailwindCSS
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://ant.design/"
                rel="noopener noreferrer"
              >
                AntDesign
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://canva.com/"
                rel="noopener noreferrer"
              >
                Canva
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://netlify.com/"
                rel="noopener noreferrer"
              >
                Netlify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://firebase.google.com/"
                rel="noopener noreferrer"
              >
                Firebase
              </a>
            </li>
          </ul>

          <ul className="list-disc">
            <p className="underline italic">Good places to learn</p>
            <li>
              <a
                target="_blank"
                href="https://fireship.io/"
                rel="noopener noreferrer"
              >
                Fireship.io
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://fireship.io/"
                rel="noopener noreferrer"
              >
                Stackoverflow.com
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://freecodecamp.org/"
                rel="noopener noreferrer"
              >
                Free Code Camp
              </a>
            </li>
          </ul>

          {/* Hacking links go here? */}
          <ul className="list-disc">
            <p className="underline italic">Hacker Resources</p>
            <li>
              <a
                target="_blank"
                href="https://portswigger.net/burp/releases/professional-community-2022-6-1?requestededition=community&requestedplatform="
                rel="noopener noreferrer"
              >
                Burpsuite
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://hackthebox.com"
                rel="noopener noreferrer"
              >
                Hack The Box
              </a>
            </li>
          </ul>
          <ul>
            <p className="underline italic">Random Stuff</p>
          </ul>
        </div>

        <p className="p-8 text-center">
          I've been playing with 3D modeling using Blender and Three.js. It's
          pretty fun but I need to work on my artistic skill a bit. Here is a
          sample of my progress so far.
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
