"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture, Float } from "@react-three/drei";
import * as THREE from "three";

function LogoModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  // Load logo texture
  const texture = useTexture("/logo.png");
  texture.flipY = false;
  texture.repeat.x = -1; // Flip horizontally to fix mirroring

  // Mouse tracking with smooth lerp
  useFrame(() => {
    if (!meshRef.current) return;

    const targetX = mouse.x * 0.4;
    const targetY = mouse.y * 0.4;

    // Smooth look-at animation
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetX,
      0.05
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -targetY,
      0.05
    );
  });

  // Gentle floating animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.05;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.1}
      floatIntensity={0.3}
    >
      <mesh ref={meshRef}>
        <planeGeometry args={[2.5, 2.5]} />
        <meshBasicMaterial
          map={texture}
          transparent
          side={THREE.DoubleSide}
          alphaTest={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function Logo3D() {
  return (
    <div className="w-full h-[400px] lg:h-[450px]">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <LogoModel />
      </Canvas>
    </div>
  );
}
