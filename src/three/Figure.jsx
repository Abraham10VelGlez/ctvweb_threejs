import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, Stars, GizmoHelper, GizmoViewport, Line, Trail, Float, Sphere } from '@react-three/drei';
import Earth from './Earth'
import '../assets/css/fondo.css'
import Earth2 from './Earth2';
export default function Figure() {

    return (

        <Canvas className='CanvasX' camera={{ position: [0, 0, 60], fov: 25 }} >
            <OrbitControls />
            <Environment preset='city' metalness={0} roughness={0} />
            <GizmoHelper alignment="botton-right" margin={[100, 100]} >
                <GizmoViewport axisColors={['red', 'green', 'blue']} labelColors="black" ></GizmoViewport>
            </GizmoHelper>
            {/*<Earth position={[0, 0, 0]}></Earth>*/}
            
            <Earth2 position={[0, 0, 0]}></Earth2>
        </Canvas>


    );
}
