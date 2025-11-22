"use client";

import { FC, useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { threedeeClass } from "@/services/calendar/2025/hatch/threedee/Threedee.css";
import { Margins } from "@/components/ui/Margins";

const Box = () => {
  const boxRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!boxRef.current) {
      return;
    }

    boxRef.current.rotation.y += delta;
    boxRef.current.rotation.x += delta;
  });

  return (
    <mesh
      ref={boxRef}
      rotation-x={Math.PI * 0.25}
      rotation-y={Math.PI * 0.25}
      position={[0, 0, -2]}
    >
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export const Threedee: FC = () => {
  return (
    <Margins block="s">
      <Canvas className={threedeeClass}>
        <ambientLight color="red" intensity={0.1} />
        <directionalLight position={[2, 2, 5]} color="red" />
        <Box />
      </Canvas>
    </Margins>
  );
};
