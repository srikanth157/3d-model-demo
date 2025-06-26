import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Avatar } from "./Avatar";
import { useEffect } from "react";
import * as THREE from "three";

export const Experience = () => {
  const viewport = useThree((state) => state.viewport);
  const gl = useThree((state) => state.gl);

  // Enable shadows and tone mapping
  useEffect(() => {
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = THREE.PCFSoftShadowMap;
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.outputEncoding = THREE.sRGBEncoding;
    gl.toneMappingExposure = 0.9; // Slightly lower exposure for realism
  }, [gl]);

  return (
    <>
      <OrbitControls target={[0, 0,0]} />
      <Environment preset="sunset" />

      {/* Lighting */}
      <ambientLight intensity={0} />
      <directionalLight
        castShadow
        position={[1.5, 10, 23]}
        intensity={1}
        shadow-mapSize-width={1024} // lower map size for more blur
        shadow-mapSize-height={1024}
        shadow-radius={10}           // makes the shadow soft
        shadow-bias={-0.0005}        // fixes shadow acne
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Avatar Model */}
      <Avatar position={[0, -2, 2]} scale={3.9} />

      {/* Curved Ground Plane */}
      <mesh position={[0, -2, 1]} receiveShadow>
        <planeGeometry args={[28, 10]} />
        <shadowMaterial  opacity={0.1} />
      </mesh>

      {/* Optional: Extra blurred shadow under feet */}
      <ContactShadows
        position={[0, -2.4, 2]}
        opacity={4}
        width={10}
        height={10}
        blur={2.5}
        far={6}
      />
    </>
  );
};
