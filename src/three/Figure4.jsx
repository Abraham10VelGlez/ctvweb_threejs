import * as THREE from 'three'
import React, { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, Stars, GizmoHelper, GizmoViewport, Line, Trail, Float, useGLTF } from '@react-three/drei';

import '../assets/css/style.css'
import { extend, useThree } from '@react-three/fiber'
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text, Preload, Html } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing, geometry } from 'maath'
import { suspend } from 'suspend-react'
import Modelon from './Modelon';
import Login from '../components/Login';



extend(geometry)


export default function Figure4() {


    function Model22() {
        const { scene } = useGLTF('../earth2/scene.gltf');
        return <primitive object={scene} />;
    }







    function Frame({ id, name, author, bg, nameFontSize, width = 1, height = 1.91803398875, children, ...props }) {
        const portal = useRef()
        const [, setLocation] = useLocation()
        const [, params] = useRoute('/item/:id')
        const [hovered, hover] = useState(false)
        useCursor(hovered)
        useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt))
        return (
            <group {...props}>
                <Text fontSize={0.1} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
                    {name}
                </Text>
                <Text fontSize={0.04} anchorX="center" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>
                    {author}
                </Text>
                <mesh name={id} onDoubleClick={(e) => (e.stopPropagation(), setLocation('/item/' + e.object.name))} onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
                    <roundedPlaneGeometry args={[width, height, 0.1]} />
                    <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
                        <color attach="background" args={[bg]} />
                        {children}
                    </MeshPortalMaterial>
                </mesh>
            </group>
        )
    }

    function Rig({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }) {
        const { controls, scene } = useThree()
        const [, params] = useRoute('/item/:id')
        useEffect(() => {
            const active = scene.getObjectByName(params?.id)
            if (active) {
                active.parent.localToWorld(position.set(0, 0.5, 0.25))
                active.parent.localToWorld(focus.set(0, 0, -2))
            }
            controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
        })
        return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
    }



    const [, params] = useRoute('/item/:id')
    const [, setLocation] = useLocation()


    return (

        <>
            <Canvas className='CanvasX' flat camera={{ fov: 75, position: [0, 0, 10] }}>
                <OrbitControls />

                {/*<GizmoHelper alignment="bottom-right" margin={[100, 100]}>
                    <GizmoViewport axisColors={['red', 'green', 'blue']} labelColors="black" />
                </GizmoHelper>*/}

                <color attach="background" args={['#8a2036']} />


                <Frame id="02" name="&nbsp;CTV WEB 2025" author="doble click para entrar" bg="#efe1ca" nameFontSize="76px">
                    <Text
                        position={[0, 3, -10]} // Ajusta la posición del texto dentro del frame
                        fontSize={0.3} // Ajusta el tamaño de la letra aquí
                        color="#000" // Ajusta el color del texto
                    >
                        Inicio de Sesión
                        <Html position={[-1, -1, 0]} distanceFactor={15}>
                            <div style={{ color: 'black', backgroundColor: '#efe1ca', padding: '50px', borderRadius: '5px' }}>
                                <h1>CAPTURA DE TABLAS DE VALOR</h1>
                                <Login></Login>
                            </div>
                        </Html>
                    </Text>
                    {/* Inserta un componente de React en la escena 3D */}


                    <ambientLight intensity={0.5} /> {/* Luz ambiental */}
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <Environment preset='city' metalness={0} roughness={0} />
                    <Modelon position={[0, -65, -175]} scale="1.5"></Modelon>
                </Frame>

                <Rig />
                <Preload all />
            </Canvas>

            <div style={{ top: 0, left: 0, width: '100%', height: '100%' }}>
                <a href="https://igecem.edomex.gob.mx/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
                    IGECEM / ABRAHAMVG
                </a>
                <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>Version10.0</div>

                <a style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }} href="#" onClick={() => setLocation('/ctv')}>
                    {params ? '< Regresar' : ''}
                </a>
            </div>{' '}
        </>





    );
}
