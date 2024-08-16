import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, Stars, GizmoHelper, GizmoViewport, Line, Trail, Float, useGLTF } from '@react-three/drei';
import Earth from './Earth'
import '../assets/css/fondo.css'
import Moonx from './Moonx';
export default function Figure2() {


    function Model() {
        const { scene } = useGLTF('../earth2/scene.gltf');
        return <primitive object={scene} />;
    }


    return (

        <Canvas className='CanvasX' camera={{ position: [0, 0, 50], fov: 25 }} >
            <OrbitControls />
            <Environment preset='city' metalness={0} roughness={0} />
            <GizmoHelper alignment="botton-right" margin={[100, 100]} >
                <GizmoViewport axisColors={['red', 'green', 'blue']} labelColors="black" ></GizmoViewport>
            </GizmoHelper>
            <Earth></Earth>
            <Moonx></Moonx>
        </Canvas>


    );
}
