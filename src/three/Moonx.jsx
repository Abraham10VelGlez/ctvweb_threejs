
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
export default function Moonx(props) {
    const { nodes, materials,scene } = useGLTF('/moon/scene.gltf')
    const meshRef = useRef()
    //console.log(materials);
    //https://sketchfab.com/3d-models/moon-26cc0b7878bb4d919b68e2be399db466

    useFrame((state, delta) => (meshRef.current.rotation.y -= delta / 10))
    return (
        <group ref={meshRef} {...props} dispose={null}>            
            <primitive object={scene} position={[20,10, 0]} scale="3" />;
        </group>

    )
}

useGLTF.preload('/moon/scene.gltf')




