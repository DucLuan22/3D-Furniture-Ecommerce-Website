/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: ʜᴀᴄᴋᴇʀ (https://sketchfab.com/infohack)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/samsung-q60r-103f7a54a01f42a99f9196503e44dfc6
title: Samsung Q60R
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function SamsungTV(props) {
  const { nodes, materials } = useGLTF("./glbFile/samsung_q60r.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Screen_0.geometry}
              material={materials.Screen}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./glbFile/samsung_q60r.glb");
