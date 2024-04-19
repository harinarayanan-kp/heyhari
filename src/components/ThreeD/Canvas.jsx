// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { Suspense } from "react";
// import { Html, useProgress } from "@react-three/drei";
// import Model from "./Model";

// function Loader() {
//   const { progress } = useProgress();
//   return <Html center>{progress} % loaded</Html>;
// }

// const ThreeCanvas = () => {
//   // const directionalLightRef = useRef();

//   const time = Date.now() * 0.001;
//   // useFrame(() => {
//   //   const x = Math.sin(time) * 5;
//   //   const y = 1;
//   //   const z = Math.cos(time) * 5;
//   //   directionalLightRef.current.position.set(x, y, z);
//   // });

//   function consoleCall() {
//     console.log("Hey");
//   }
//   const mouse = {
//     x: 0,
//     y: 0,
//   };

//   // Update mouse position
//   const handleMouseMove = (event) => {
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//   };

//   // Rotate the model based on mouse movement
//   useFrame((state) => {
//     const x = state.mouse.x;
//     const y = state.mouse.y;
//     state.camera.position.x += (x * 5 - state.camera.position.x) * 0.05;
//     state.camera.position.y += (-y * 5 - state.camera.position.y) * 0.05;
//     state.camera.lookAt(0, 0, 0);
//   });
//   return (
//     <div
//       style={{
//         position: "fixed",
//         width: "100vw",
//         height: "100vh",
//       }}
//     >
//       <Canvas
//         shadows
//         dpr={[1, 2]}
//         camera={{ position: [0, 0, 10], fov: 90, near: 1, far: 50 }}
//       >
//         <Suspense fallback={<Loader />}>
//           {/* <color attach="background" args={["#202020"]} /> */}
//           {/* <pointLight color={"red"} intensity={80} position={[5, 5, 2]} />
//           <pointLight color={"blue"} intensity={80} position={[-5, 5, 2]} /> */}
//           {/* <MovingSpot color="#0c8cbf" position={[3, 3, 2]} />
//           <MovingSpot color="#b00c3f" position={[1, 3, 0]} /> */}
//           {/* <fog attach="fog" args={["#202020", 5, 20]} /> */}
//           {/* <Environment preset="apartment" background /> */}
//           <directionalLight
//             intensity={2}
//             color="white"
//             position={[Math.cos(time), 1, Math.sin(time) + 2]}
//           />
//           <OrbitControls enableZoom={false} enablePan={false} />
//           <ambientLight intensity={0.05} />
//           {/* <Model path="blender.glb" position={[-6, 0, 0]} />
//           <Model path="aftereffects.glb" position={[-3, 0, 0]} /> */}
//           <Model path="photoshop.glb" position={[0, 0, 0]} />
//           {/* <Model path="premierepro.glb" position={[3, 0, 0]} />
//           <Model path="figma.glb" position={[6, 0, 0]} /> */}
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default ThreeCanvas;
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import Model from "./Model";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const ThreeCanvas = () => {
  const divsize = 200;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const modelRef = useRef();

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / divsize) * 2 - 1;
    const y = -(clientY / divsize) * 2 + 1;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    smoothResetRotation();
  };

  const smoothResetRotation = () => {
    const startTime = Date.now();
    const startRotation = {
      x: mousePos.y * Math.PI * 0.25,
      y: mousePos.x * Math.PI * 0.25,
    };
    const targetRotation = { x: 0, y: 0 };

    const animateRotation = () => {
      const t = Math.min(1, (Date.now() - startTime) / 300);

      setMousePos({
        y: startRotation.x + (targetRotation.x - startRotation.x) * t,
        x: startRotation.y + (targetRotation.y - startRotation.y) * t,
      });

      if (t < 1) requestAnimationFrame(animateRotation);
    };

    animateRotation();
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / divsize) * 2 - 1;
      const y = -(clientY / divsize) * 2 + 1;
      setMousePos({ x, y });
    };

    const handleMouseLeave = () => smoothResetRotation();

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      handleMouseLeave();
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div
      style={{
        width: `${divsize}px`,
        height: `${divsize}px`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 2.5], fov: 90, near: 1, far: 50 }}
      >
        <Suspense fallback={<Loader />}>
          <color attach="background" args={["#202020"]} />
          <directionalLight intensity={2} color="white" position={[0.5, 0.5, 1]} />
          <ambientLight intensity={0.05} />
          <Model
            rotation={{
              x: mousePos.y * Math.PI * -0.25,
              y: mousePos.x * Math.PI * 0.25,
              z: 0,
            }}
            ref={modelRef}
            path="photoshop.glb"
            position={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
