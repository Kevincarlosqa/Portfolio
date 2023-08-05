import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Scene";
import CanvasLoader from "./canvas/Loader";
const Phoenix = () => {
  return (
    <Canvas
      // className="mt-20 ml-5"
      className="overflow-visible"
      shadows
      // frameloop="frame"
      camera={{
        fov: 45,
        near: 0.2,
        far: 200,
        position: [-60, 0, 0],
        rotation: [0, Math.PI / 2, 0],
      }}
    >
      <OrbitControls
        // autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <directionalLight intensity={0.5} />
      <ambientLight intensity={0.5} />
      <pointLight intensity={2} />
      <Suspense fallback={<CanvasLoader />} className="">
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Phoenix;
