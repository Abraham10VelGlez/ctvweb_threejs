
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
export default function Earth2(props) {
    /*const { nodes, materials } = useGLTF('/earth2/scene.gltf')
    const meshRef = useRef()
    console.log(materials);*/
    //console.log(materials);

    /*"uri": "textures/Scene_-_Root_baseColor.jpeg"*/
    //<mesh geometry={nodes.Object_6.geometry} material={materials['agua']} scale={80} />
    //useFrame((state, delta) => (meshRef.current.rotation.y += delta / 10))

    const group = useRef()
    const { nodes, materials, scene, animations } = useGLTF('/earth2/scene.gltf')
    const { actions, names } = useAnimations(animations, group)
    console.log(names);

    //activacion de animacion del modelo 3D
    useEffect(() => {
        console.log(names[0])
        //actions[names[0]].reset().play();       
        //if (names.length > 0) {
        actions[names[0]];
        actions['Animaci��n'];

        //actions[names[2]].reset().fadeIn(0.5).play();
    }, [actions, names]);



    const meshRef = useRef()
    useFrame((state, delta) => (meshRef.current.rotation.x += delta / 10))

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />

            <group ref={meshRef} {...props} dispose={null}>
                <primitive object={scene} position={[0, 0, 0]} scale="50" />
            </group>



            {/*
            <group ref={meshRef} {...props} dispose={null}>
                <mesh geometry={nodes.Object_25.geometry} material={materials['tierra']} />
                <mesh geometry={nodes.Object_10.geometry} material={materials['nube']} />
                <mesh geometry={nodes.Object_4.geometry} material={materials['agua']} scale={75} />
                <mesh geometry={nodes.Object_6.geometry} material={materials['tierra']} scale={75} />


            </group>

            {Object.values(nodes).map((node, index) => (
                <primitive key={index} object={node} position={[0, 60, 0]} />
            ))}

*/}











        </>
    )
}

useGLTF.preload('/earth2/scene.gltf')




