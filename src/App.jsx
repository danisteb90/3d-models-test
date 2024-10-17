import { Canvas } from "@react-three/fiber";

import "./App.css";
import { Model } from "./components/Scene";
import { Loader, OrbitControls } from "@react-three/drei";

function App() {
	return (
		<div className="app-container">
			<Loader />
			<Canvas className="canvas-container" camera={{ position: [0, 0, 400] }}>
				<OrbitControls />
				<ambientLight intensity={3.5} />
				<pointLight position={[10, 10, 10]} />
				<Model position={[0, 0, -200]} />
			</Canvas>
		</div>
	);
}

export default App;
