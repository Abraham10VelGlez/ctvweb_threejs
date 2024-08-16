
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
export default function Earth2(props) {
    const { nodes, materials } = useGLTF('/earth2/scene.gltf')
    const meshRef = useRef()
    console.log(materials);

    /*"uri": "textures/Scene_-_Root_baseColor.jpeg"*/

    useFrame((state, delta) => (meshRef.current.rotation.y += delta / 10))
    return (
        <>
            <group ref={meshRef} {...props} dispose={null}>
                {/*<mesh geometry={nodes.Object_6.geometry} material={materials['nube']} scale={10} />*/}
                {Object.values(nodes).map((node, index) => (
                    <primitive key={index} object={node} />
                ))}

            </group>
            


        </>
    )
}

useGLTF.preload('/earth2/scene.gltf')


