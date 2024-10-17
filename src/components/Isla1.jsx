/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 src/assets/isla/isla1Final.gltf -o src/components/Isla1.jsx -r public 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Isla(props) {
	const { nodes, materials } = useGLTF("/../src/assets/isla/isla1Final.gltf");
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.planetaFinalIsla1.geometry}
				material={materials.planetaTexIsla1}
				position={[0.674, -0.65, 0.898]}
				rotation={[-0.259, 0.146, 0.017]}
				scale={[0.015, 0.032, 0.051]}
			/>
			<group
				position={[0.674, -0.65, 0.898]}
				rotation={[-0.259, 0.146, 0.017]}
				scale={[0.015, 0.032, 0.051]}
			>
				<mesh
					geometry={nodes.waterFinalIsla1_1.geometry}
					material={materials.waterTexIsla1}
				/>
				<mesh
					geometry={nodes.waterFinalIsla1_2.geometry}
					material={materials.outlineTexIsla1}
				/>
			</group>
			<group
				position={[0.674, -0.65, 0.898]}
				rotation={[-0.259, 0.146, 0.017]}
				scale={[0.015, 0.032, 0.051]}
			>
				<mesh
					geometry={nodes.koiFinalIsla1_1.geometry}
					material={materials.koiTexIsla1}
				/>
				<mesh
					geometry={nodes.koiFinalIsla1_2.geometry}
					material={materials.outlineTexIsla1}
				/>
			</group>
			<group
				position={[0.674, -0.65, 0.898]}
				rotation={[-0.259, 0.146, 0.017]}
				scale={[0.015, 0.032, 0.051]}
			>
				<mesh
					geometry={nodes.piedrasFinalIsla1_1.geometry}
					material={materials.baseTexIsla1}
				/>
				<mesh
					geometry={nodes.piedrasFinalIsla1_2.geometry}
					material={materials.outlineTexIsla1}
				/>
			</group>
			<mesh
				geometry={nodes.baseFinalIsla1.geometry}
				material={materials.baseTexIsla1}
				position={[0.674, -0.65, 0.898]}
				rotation={[-0.259, 0.146, 0.017]}
				scale={[0.015, 0.032, 0.051]}
			/>
			<group
				position={[0.674, -0.65, 0.898]}
				rotation={[-0.259, 0.146, 0.017]}
				scale={[0.015, 0.032, 0.051]}
			>
				<mesh
					geometry={nodes.plantasFinalIsla1001.geometry}
					material={materials.foliageTexIsla1}
				/>
				<mesh
					geometry={nodes.plantasFinalIsla1001_1.geometry}
					material={materials.baseTexIsla1}
				/>
				<mesh
					geometry={nodes.plantasFinalIsla1001_2.geometry}
					material={materials.outlineTexIsla1}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/../src/assets/isla/isla1Final.gltf");
