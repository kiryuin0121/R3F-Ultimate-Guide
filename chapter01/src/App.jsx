import { Grid, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas camera={{ position: [0, 3, 3] }}>
      <axesHelper/>
      <OrbitControls/>
    <Grid
  infiniteGrid
  cellSize={0.5}
  sectionSize={2}
  fadeFrom={3}
  fadeDistance={8}
  fadeStrength={2}
/>
      
    </Canvas>
  );
}

export default App;
