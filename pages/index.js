import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export default function Index(session) {
  const Portfolio = dynamic(() => import("../pages/Portfolio"));
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const showSplashScreen = async () => {
      await setTimeout(() => {
        setSplash(false);
      }, 777);
    };
    showSplashScreen();
    return () => {};
  }, [splash, setSplash]);

  return (
    <>
      <Transition
        show={splash}
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-100"
      >
        <main className="bg-black text-white">
          <div className="flex mx-auto items-center min-h-screen text-center justify-center align-center pb-40 h-40">
            <p className="transition-all  ease-in-out animate-ping text-4xl">
              buncombe.tech
            </p>
          </div>
        </main>
      </Transition>
      <Portfolio />
    </>
  );
}
