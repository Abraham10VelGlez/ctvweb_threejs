import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'
import Login from '../components/Login'
import Modelon from './Modelon'

export default function Earthf(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/earth2/scene.gltf')
    const { actions, names } = useAnimations(animations, group)
    // console.log(names);
    //activacion de animacion del modelo 3D
    useEffect(() => {
        if (actions && names && names.length > 0) {
            //console.log('Animación a reproducir:', names[0]);

            // Validar que la acción correspondiente esté definida antes de intentar reproducirla
            if (actions[names[0]]) {
                //actions[names[0]].reset().fadeIn(8).play();
                actions[names[0]].reset().fadeIn(8).play();
            } else {
                console.error(`La acción para la animación "${names[0]}" no está definida.`);
            }
        } else {
            console.error('No se encontraron animaciones o actions está indefinido.');
        }

    }, [actions, names]);

    const meshRef = useRef()
    useFrame((state, delta) => (meshRef.current.rotation.y += delta / 10))

    const htmlRef = useRef(); // Referencia para el componente HTML
    // Rotación continua del planeta sirve este ejemplo
    /*useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta / 10; // Ajusta la velocidad de rotación aquí
        }
    });*/

    // Sincronizar el componente HTML con la rotación del modelo
    useFrame(() => {
        if (htmlRef.current && group.current) {
            // Esto hace que el HTML se mantenga orientado hacia la cámara (mirada fija)
            htmlRef.current.rotation.copy(group.current.rotation);
        }
    });


    return (
        <>

            <group ref={group} {...props} dispose={null}>
                <group ref={meshRef} rotation={[0, 0.01, 0,]} >
                    <primitive object={nodes.root} scale="50" />
                </group>
                <Html position={[-2.5, 45, 95]} distanceFactor={40}>
                    {/* Aquí puedes poner cualquier componente de React */}
                    <div >
                        <Login></Login>
                    </div>
                </Html>

            </group>
        </>

    )
}

useGLTF.preload('/earth2/scene.gltf')