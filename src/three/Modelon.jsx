import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


export default function Modelon(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/earth2/scene.gltf')
    const { actions, names } = useAnimations(animations, group)
    console.log(names);
    //activacion de animacion del modelo 3D
    useEffect(() => {
        if(actions && names && names.length > 0) {
            console.log('Animación a reproducir:', names[0]);

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
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[0, 0.01, 0,]} >
                <primitive object={nodes.root} scale="50" />
            </group>

        </group>
    )
}

useGLTF.preload('/earth2/scene.gltf')