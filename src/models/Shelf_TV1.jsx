/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Эльба Мебель (https://sketchfab.com/elba)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/furniture-module-bv183-1-76069f879e974bdeb43af713082f2a21
title: furniture module BV183_1
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function shelf_TV1(props) {
  const { nodes, materials } = useGLTF('./glbFile/shelf_TV1.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
          <group position={[63239.63, 206, -12.81]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[596.99, -17.11, 84.62]}>
              <mesh geometry={nodes.Box_Kapuchino_glyanec_0.geometry} material={materials.Kapuchino_glyanec} />
            </group>
            <group position={[596.79, -210.62, 157.89]}>
              <mesh geometry={nodes.Handle_Metall_0.geometry} material={materials.Metall} />
            </group>
            <group position={[0, 4.5, 0]}>
              <mesh geometry={nodes['Body_Material_#39_0'].geometry} material={materials.Material_39} />
              <mesh geometry={nodes['Body_Material_#38_0'].geometry} material={materials.Material_38} />
            </group>
            <group position={[0, 4.5, 0]}>
              <mesh geometry={nodes['Object747_Material_#39_0'].geometry} material={materials.Material_39} />
              <mesh geometry={nodes['Object747_Material_#38_0'].geometry} material={materials.Material_38} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./glbFile/shelf_TV1.glb')