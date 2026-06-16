import { Box } from '@react-three/drei'
import { useGLTF, useTexture } from '@react-three/drei'
import React, { useContext } from 'react'
import { AppContext } from '../../contexts/contextProvider';
import * as THREE from 'three'

const Model = () => {
  const { nodes, materials } = useGLTF('./models/chair.gltf');

  const { selectedMaterial, selectedChairColor, selectedCushionColor, selectedLegType } = useContext(AppContext)

  const leatherTextureProps = useTexture({
    // map: "./textures/leather/Leather_008_Base Color.jpg",
    normalMap: "./textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "./textures/leather/Leather_008_Roughness.jpg",
    aoMap: "./textures/leather/Leather_008_Ambient Occlusion.jpg",
  });

  // console.log(nodes.Legs1)

  // leatherTextureProps.map.repeat.set(3, 3);
  leatherTextureProps.normalMap.repeat.set(3, 3);
  leatherTextureProps.roughnessMap.repeat.set(3, 3);
  leatherTextureProps.aoMap.repeat.set(3, 3);
  // leatherTextureProps.map.wrapS = leatherTextureProps.map.wrapT =
  //   THREE.MirroredRepeatWrapping;
  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  const fabricTextureProps = useTexture({
    // map: "./textures/fabric/Fabric_Knitted_006_basecolor.jpg",
    normalMap: "./textures/fabric/Fabric_Knitted_006_normal.jpg",
    roughnessMap: "./textures/fabric/Fabric_Knitted_006_roughness.jpg",
    aoMap: "./textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg",
  });

  fabricTextureProps.normalMap.repeat.set(3, 3);
  fabricTextureProps.roughnessMap.repeat.set(3, 3);
  fabricTextureProps.aoMap.repeat.set(3, 3);
  // fabricTextureProps.map.wrapS = fabricTextureProps.map.wrapT =
  //   THREE.RepeatWrapping;
  fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT =
    THREE.RepeatWrapping;
  fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, -1.3, 0]}>
        <mesh geometry={nodes.Chair.geometry} >
          {/* <meshStandardMaterial color={'blue'} /> */}
          <meshStandardMaterial
            {...(selectedMaterial === "Leather"
              ? leatherTextureProps
              : fabricTextureProps)}
            color={selectedChairColor}
          />
        </mesh>
        <mesh geometry={nodes.Cushion.geometry}>
          <meshStandardMaterial
            {...(selectedMaterial === "Leather"
              ? leatherTextureProps
              : fabricTextureProps)}
            color={selectedCushionColor} />
        </mesh>
        {
          selectedLegType === 'Design' &&
          <mesh geometry={nodes.Legs1.geometry}
            material={materials.Legs1}
            castShadow
          >
            {/* <meshStandardMaterial color={'black'} /> */}
          </mesh>
        }
        {
          selectedLegType === 'Classic' &&
          <mesh geometry={nodes.Legs2.geometry}
            material={materials.Legs2}
            castShadow
          >
            {/* <meshStandardMaterial color={'black'} /> */}
          </mesh>
        }
      </group>
    </>
  )
}

export default Model

useGLTF.preload("./models/shoe.gltf");