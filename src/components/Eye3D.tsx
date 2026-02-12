"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function EyeModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pupilRef = useRef<THREE.Mesh>(null);
  const irisRef = useRef<THREE.Mesh>(null);

  // Mouse tracking
  useFrame((state) => {
    if (!meshRef.current || !pupilRef.current || !irisRef.current) return;

    const { mouse } = state;
    const targetX = mouse.x * 0.3;
    const targetY = mouse.y * 0.3;

    // Smooth look-at animation
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetY,
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetX,
      0.05
    );

    // Pupil follows slightly more
    pupilRef.current.position.x = THREE.MathUtils.lerp(
      pupilRef.current.position.x,
      targetX * 0.4,
      0.03
    );
    pupilRef.current.position.y = THREE.MathUtils.lerp(
      pupilRef.current.position.y,
      -targetY * 0.4,
      0.03
    );
  });

  // Gentle floating animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.1}
      floatIntensity={0.3}
    >
      <group ref={meshRef}>
        {/* Outer sclera (white of eye) */}
        <Sphere args={[1, 64, 64]} scale={[1, 0.85, 0.5]}>
          <meshPhysicalMaterial
            color="#f5f5f5"
            roughness={0.2}
            metalness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0}
          />
        </Sphere>

        {/* Iris - Emerald green matching logo */}
        <Sphere
          ref={irisRef}
          args={[0.55, 32, 32]}
          position={[0, 0, 0.42]}
          scale={[1, 1, 0.3]}
        >
          <MeshDistortMaterial
            color="#0d7a3f"
            roughness={0.4}
            metalness={0.2}
            distort={0.2}
            speed={1}
          />
        </Sphere>

        {/* Iris pattern rings */}
        {[0.45, 0.35, 0.25].map((radius, i) => (
          <Sphere
            key={i}
            args={[radius, 32, 32]}
            position={[0, 0, 0.44 + i * 0.01]}
            scale={[1, 1, 0.1]}
          >
            <meshPhysicalMaterial
              color="#0d7a3f"
              roughness={0.5}
              metalness={0.1}
              transparent
              opacity={0.8 - i * 0.2}
            />
          </Sphere>
        ))}

        {/* Pupil */}
        <Sphere
          ref={pupilRef}
          args={[0.22, 32, 32]}
          position={[0, 0, 0.48]}
          scale={[1, 1, 0.2]}
        >
          <meshPhysicalMaterial
            color="#1a1a1a"
            roughness={0.8}
            metalness={0}
          />
        </Sphere>

        {/* Specular highlight for realism */}
        <Sphere
          args={[0.15, 16, 16]}
          position={[0.3, 0.3, 0.4]}
          scale={[1, 0.6, 0.3]}
        >
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0}
            metalness={0}
            transparent
            opacity={0.6}
            emissive="#ffffff"
            emissiveIntensity={0.5}
          />
        </Sphere>

        {/* Secondary highlight */}
        <Sphere
          args={[0.08, 16, 16]}
          position={[-0.2, -0.2, 0.42]}
          scale={[1, 0.8, 0.5]}
        >
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0}
            metalness={0}
            transparent
            opacity={0.3}
            emissive="#ffffff"
            emissiveIntensity={0.3}
          />
        </Sphere>
      </group>
    </Float>
  );
}

export default function Eye3D() {
  return (
    <div className="w-full h-[400px] lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, 5]} intensity={0.8} color="#d4a828" />
        <pointLight position={[5, -5, 5]} intensity={0.5} color="#0d7a3f" />
        <EyeModel />
      </Canvas>
    </div>
  );
}
