import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

function Model(props) {
  const gltf = useLoader(GLTFLoader, props.path);
  
  if (props.rotation) {
    gltf.scene.rotation.set(props.rotation.x, props.rotation.y, props.rotation.z);
  }

  return <primitive object={gltf.scene} position={props.position} />;
}

export default Model;
