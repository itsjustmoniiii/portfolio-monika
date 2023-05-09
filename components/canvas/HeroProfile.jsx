import React, { Suspense } from 'react';

import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import CanvasLoader from '../Loader';

const HeroProfileCanvas = () => {
  return (
    <>
      <Sphere args={[1, 200, 800]} scale={1.5}>
        <MeshDistortMaterial
          color="#12bbc8"
          attach="material"
          distort={0.45}
          speed={1.5}
        />
      </Sphere>
    </>
  );
};

const HeroCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[4, 2, 2]} />
        <HeroProfileCanvas />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default HeroCanvas;
