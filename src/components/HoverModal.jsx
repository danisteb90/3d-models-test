import { Html } from "@react-three/drei";
import "./HoverModal.css";

function HoverModal({ text }) {
	return (
		<Html distanceFactor={10}>
			<div className="hover-modal">
				<p>{text}</p>
			</div>
		</Html>
	);
}

export default HoverModal;
