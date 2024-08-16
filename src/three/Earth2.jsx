
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
export default function Earth2(props) {
    const { nodes, materials } = useGLTF('/earth2/scene.gltf')
    const meshRef = useRef()
    console.log(materials);
    //console.log(materials);

    /*"uri": "textures/Scene_-_Root_baseColor.jpeg"*/
    //<mesh geometry={nodes.Object_6.geometry} material={materials['agua']} scale={80} />
    //useFrame((state, delta) => (meshRef.current.rotation.y += delta / 10))
    return (
        <>

            <group ref={meshRef} {...props} dispose={null}>
                <mesh geometry={nodes.Object_25.geometry} material={materials['tierra']} />
                <mesh geometry={nodes.Object_10.geometry} material={materials['nube']} />
                <mesh geometry={nodes.Object_4.geometry} material={materials['agua']} scale={75} />
                <mesh geometry={nodes.Object_6.geometry} material={materials['tierra']} scale={75} />


            </group>

            {Object.values(nodes).map((node, index) => (
                <primitive key={index} object={node} position={[0, 60, 0]} />
            ))}














        </>
    )
}

useGLTF.preload('/earth2/scene.gltf')




