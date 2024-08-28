import React, { useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshStandardMaterial } from 'three';
import Modelon from './Modelon';

const Model = ({ url }) => {
    const gltf = useLoader(GLTFLoader, url);
    const ref = useRef();    

    // Revisa y ajusta los materiales del modelo
    React.useEffect(() => {
        gltf.scene.traverse((child) => {});
    }, [gltf]);

    return <primitive object={gltf.scene} ref={ref} />;
};

const Prueba = () => (
    <Canvas className='CanvasX' flat camera={{ fov: 75, position: [0, 0, 20] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={50} />
        <OrbitControls />
        {/*<Model url="free_1975_porsche_911_930_turbo.glb" />*/}
        <Modelon></Modelon>
    </Canvas>
);

export default Prueba;
