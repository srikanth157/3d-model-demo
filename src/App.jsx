import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    // <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
    //   <color attach="background" args={["#ececec"]} />
      <Canvas shadows camera={{ position: [0, 0, 11], fov: 39.5 }}>
  <Experience />
</Canvas>
    // </Canvas>
  );
}

export default App;
