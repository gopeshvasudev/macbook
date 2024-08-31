import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import MacContainer from "./components/MacContainer";
import "./style.css";

const App = () => {
  return (
    <main className="main w-full h-screen bg-black font-[poppins]">
      <nav className="navbar w-full h-[10vh] flex items-center justify-center">
        <ul className="flex items-center justify-center gap-14 border-b-[0.5px] border-[#333333] h-full">
          {[
            "Store",
            "iPhone",
            "iPad",
            "Watch",
            "Vision",
            "Airpods",
            "TV & Home",
            "Entertainment",
            "Accesories",
            "Support",
          ].map((link, index) => (
            <li key={index}>
              <a href="" className="text-white font-normal text-sm">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <section className="hero relative w-full h-[90vh]">
        <div className="heading absolute text-white left-1/2 -translate-x-1/2 top-10 flex flex-col items-center gap-2">
          <h1 id="title" className="text-7xl font-bold tracking-tight">macbook pro</h1>
          <h2 className="text-xl font-medium">Oh so pro.</h2>
          <p className="text-sm text-center font-light tracking-tight text-[#e0e0e0] w-3/4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus commodi non inventore! Impedit, consequuntur. Non, rerum neque. Officia eos ullam facere amet praesentium fugit animi.</p>
        </div>
        <Canvas
          className="mac-canvas"
          camera={{ fov: 12, position: [0, -10, 180] }}
        >
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
            ]}
          />
          <ScrollControls
            pages={3}
            style={{ scrollbarWidth: "none"}}
          >
            <MacContainer />
          </ScrollControls>
        </Canvas>
      </section>
    </main>
  );
};

export default App;
