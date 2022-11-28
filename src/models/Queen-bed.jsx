/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: lugher3d.com (https://sketchfab.com/Luca.Malviz)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/queen-bed-39d113d5868d473caf71e928d1d313a6
title: Queen-bed
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Queen_bed(props) {
  const { nodes, materials } = useGLTF('./glbFile/queen-bed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-14.68, 13.93, 30.62]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.03}>
            <group position={[928.28, -448.13, -436.42]}>
              <mesh geometry={nodes.queen_bed_Curtins1_0.geometry} material={materials.Curtins1} />
            </group>
            <group position={[928.28, -448.13, -436.42]}>
              <mesh geometry={nodes.queen_bed4_fabric_brown_dark_0.geometry} material={materials.fabric_brown_dark} />
            </group>
            <group position={[928.28, -448.13, -436.42]}>
              <mesh geometry={nodes.queen_bed5_fabric_brown_dark_0.geometry} material={materials.fabric_brown_dark} />
            </group>
            <group position={[928.28, -448.13, -436.42]}>
              <mesh geometry={nodes.queen_bed6_fabric_brown_dark_0.geometry} material={materials.fabric_brown_dark} />
            </group>
            <group position={[928.28, -448.13, -436.42]}>
              <mesh geometry={nodes.queen_bed7_fabric_brown_dark_0.geometry} material={materials.fabric_brown_dark} />
            </group>
            <group position={[929.1, -445, -395.42]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh geometry={nodes.pCube42143476_fabric_brown_0.geometry} material={materials.fabric_brown} />
            </group>
            <group position={[929.1, -450.14, -409.26]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh geometry={nodes.pCube42143475_fabric_brown_0.geometry} material={materials.fabric_brown} />
            </group>
            <group position={[928.28, -448.13, -436.42]}>
              <mesh geometry={nodes.polySurface285047_fabric_brown_dark_0.geometry} material={materials.fabric_brown_dark} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./glbFile/queen-bed.glb')