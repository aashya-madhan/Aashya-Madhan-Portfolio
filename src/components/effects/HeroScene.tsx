"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import type { Mesh } from "three";

function SculpturalCore() {
  const core = useRef<Mesh | null>(null);
  const ringA = useRef<Mesh | null>(null);
  const ringB = useRef<Mesh | null>(null);

  useFrame((state, delta) => {
    if (!core.current || !ringA.current || !ringB.current) return;
    core.current.rotation.y += delta * 0.12;
    core.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.12;
    ringA.current.rotation.x += delta * 0.08;
    ringA.current.rotation.z += delta * 0.16;
    ringB.current.rotation.y -= delta * 0.1;
    ringB.current.rotation.x = Math.PI / 2.8 + Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
  });

  return (
    <group>
      <Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.38}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.12, 5]} />
          <MeshDistortMaterial
            color="#b89a61"
            roughness={0.19}
            metalness={0.82}
            distort={0.22}
            speed={1.2}
          />
        </mesh>
        <mesh ref={ringA} rotation={[0.8, 0.2, 0.1]}>
          <torusGeometry args={[1.52, 0.018, 16, 180]} />
          <meshStandardMaterial color="#ead7aa" metalness={1} roughness={0.24} />
        </mesh>
        <mesh ref={ringB} rotation={[1.1, 0.5, 0.4]}>
          <torusGeometry args={[1.72, 0.009, 12, 180]} />
          <meshStandardMaterial color="#8b7044" metalness={1} roughness={0.3} />
        </mesh>
        <mesh scale={1.95}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#c5a568" wireframe transparent opacity={0.045} />
        </mesh>
      </Float>
      <Sparkles
        count={85}
        scale={5.2}
        size={1.7}
        speed={0.22}
        color="#e6d2a4"
        opacity={0.5}
      />
    </group>
  );
}

function SceneFallback() {
  return (
    <div aria-hidden="true" className="hero-3d-fallback">
      <div className="hero-fallback-core" />
      <div className="hero-fallback-orbit hero-fallback-orbit-a" />
      <div className="hero-fallback-orbit hero-fallback-orbit-b" />
    </div>
  );
}

export function HeroScene() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return <SceneFallback />;

  return (
    <div className="hero-scene" aria-label="An abstract animated gold sculpture" role="img">
      <div className="hero-scene-glow" />
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 38 }}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        fallback={<SceneFallback />}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 5, 4]} intensity={2.2} color="#fff2d4" />
        <pointLight position={[-4, -2, 3]} intensity={5} color="#a47d3b" />
        <SculpturalCore />
      </Canvas>
    </div>
  );
}
