import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Isla } from "./Isla1";

function Box({ position, onClick }) {
	const meshRef = useRef();

	useFrame((state, delta) => {
		// meshRef.current.rotation.x += delta;
		meshRef.current.rotation.y += delta * 0.5;
	});

	return (
		<group ref={meshRef} position={position} onClick={onClick}>
			<Isla />
		</group>
	);
}

export default Box;
