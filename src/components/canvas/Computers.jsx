import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} position={[0, 1, 0]} groundColor='black' />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={2} intensity={3000} castShadow shadow-mapSize={1024} />
      <pointLight position={[-10, -10, -10]} intensity={1000} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.70}
        position={isMobile ? [-2.5, -3, -2.2] : [-2, -3.70, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showComputer, setShowComputer] = useState(false);

  useEffect(() => {
    const mediaQueryMobile = window.matchMedia("(max-width: 500px)");
    const mediaQueryDesktop = window.matchMedia("(min-width: 768px)");

    setIsMobile(mediaQueryMobile.matches);
    setShowComputer(mediaQueryDesktop.matches);

    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleDesktopChange = (event) => {
      setShowComputer(event.matches);
    };

    mediaQueryMobile.addEventListener("change", handleMobileChange);
    mediaQueryDesktop.addEventListener("change", handleDesktopChange);

    return () => {
      mediaQueryMobile.removeEventListener("change", handleMobileChange);
      mediaQueryDesktop.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  if (!showComputer) return null; // Don't render anything if showComputer is false

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
