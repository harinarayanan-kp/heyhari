function MovingSpot({ vec = new Vector3(), ...props }) {
    return (
      <Suspense fallback={null}>
        <MovingSpotImpl vec={vec} {...props} />
      </Suspense>
    );
  }
  
  function MovingSpotImpl({ vec = new Vector3(), ...props }) {
    const depthBuffer = useDepthBuffer({ frames: 1 });
    const light = useRef();
    const viewport = useThree((state) => state.viewport);
    useFrame((state) => {
      light.current.target.position.lerp(
        vec.set(
          (state.mouse.x * viewport.width) / 2,
          (state.mouse.y * viewport.height) / 2,
          0
        ),
        0.1
      );
      light.current.target.updateMatrixWorld();
    });
    return (
      <SpotLight
        castShadow
        ref={light}
        penumbra={1}
        distance={6}
        angle={0.35}
        attenuation={5}
        anglePower={4}
        intensity={2}
        depthBuffer={depthBuffer}
        {...props}
      />
    );
  }
  