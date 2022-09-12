import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";

import Bar from "../components/3d/Bar";
import BandScene from "../components/3d/BandScene";

export const Loading = () => {
  return (
    <>
      <div className="bg-black h-screen text-white">
        Don't be afraid of the dark.
      </div>
      ;
    </>
  );
};

function FlashLight() {
  return (
    <>
      <div className="bg-black h-screen">
        <div className=" h-40 fixed lg:top-20 m-4 lg:m-16 z-10 w-28 text-white text-xl">
          <p id="message">
            Asheville, NC punk band members no where to be found.
          </p>
          {/* <p id="message">Hover over an instrument</p> */}
        </div>
        <Suspense>
          <Canvas>
            <BandScene />
          </Canvas>
        </Suspense>
      </div>
    </>
  );
}

export default FlashLight;
