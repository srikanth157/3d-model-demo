import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    // <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
    //   <color attach="background" args={["#ececec"]} />
      <Canvas shadows   camera={{ position: [0, -0.5, 10.5], fov: 54 }}>
  <Experience />
</Canvas>
    // </Canvas>
  );
}

export default App;
