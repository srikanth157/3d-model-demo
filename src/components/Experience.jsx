import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Avatar } from "./Avatar";
import { useEffect } from "react";
import * as THREE from "three";

export const Experience = () => {
  const gl = useThree((state) => state.gl);

  // Enable shadows and tone mapping
  useEffect(() => {
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = THREE.PCFSoftShadowMap;
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.outputEncoding = THREE.sRGBEncoding;
    gl.toneMappingExposure = 0.9;
  }, [gl]);

  return (
    <>
      <OrbitControls target={[0, 1, 0]} />
      <Environment preset="sunset" />

      {/* Lighting */}
      <ambientLight intensity={0} />
      <directionalLight
        castShadow
        position={[1.5, 1, 23]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-radius={10}
        shadow-bias={-0.0005}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Avatar Model (moved slightly down) */}
      <Avatar position={[0, -2, 2]} scale={4.2} />

      {/* Ground Plane (closer to avatar's feet) */}
      <mesh position={[0, -2, 1]} receiveShadow>
        <planeGeometry args={[28, 18]} />
        <shadowMaterial opacity={0.1} />
      </mesh>

      {/* Contact Shadow (closer to new foot level) */}
      <ContactShadows
        position={[0, -2.2, 2]}
        opacity={0.4}
        width={10}
        height={10}
        blur={2.5}
        far={6}
      />
    </>
  );
};
