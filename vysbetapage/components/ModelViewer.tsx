'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('/models/3d-glasses.gltf'); // place this file in /public/models
  return <primitive object={gltf.scene} scale={1.5} />;
};

const ModelViewer = () => (
  <div className="w-full h-[500px]">
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  </div>
);

export default ModelViewer;