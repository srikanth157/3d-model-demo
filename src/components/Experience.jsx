import { Environment, OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Avatar } from "./Avatar";
import { useEffect } from "react";
import * as THREE from "three";

export const Experience = () => {
  const viewport = useThree((state) => state.viewport);
  const gl = useThree((state) => state.gl);

  // Enable shadows in WebGL renderer
  useEffect(() => {
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = THREE.PCFSoftShadowMap;
  }, [gl]);

  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={1.5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Avatar Model (should cast shadow) */}
      <Avatar  position={[0, -2, 2]} scale={2.8} />

      {/* Ground Plane (receives shadow) */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2, 2]}
        receiveShadow
      >
        <planeGeometry args={[viewport.width * 3, viewport.height * 2 ]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </>
  );
};
