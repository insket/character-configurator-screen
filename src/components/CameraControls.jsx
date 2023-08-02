import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import {
  useCharacterCustomization,
  CameraModes,
} from "../contexts/CharacterCustomizationContext";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const cameraPositions = {
  [CameraModes.HEAD]: {
    position: new THREE.Vector3(0, 0.5, 1),
    target: new THREE.Vector3(0, 0.5, 0),
  },
  [CameraModes.TOP]: {
    position: new THREE.Vector3(-0.5, 0.2, 1.5),
    target: new THREE.Vector3(0, 0.2, 0),
  },

  [CameraModes.BOTTOM]: {
    position: new THREE.Vector3(0, -0.5, 2.5),
    target: new THREE.Vector3(0, -0.5, 0),
  },
};
export default function CameraControls() {
  const { cameraMode, setCameraMode } = useCharacterCustomization();
  const orbitControls = useRef();

  useFrame(({ camera }, delta) => {
    if (cameraMode === CameraModes.FREE) {
      return;
    }

    camera.position.lerp(cameraPositions[cameraMode].position, 3 * delta);
    orbitControls.current.target.lerp(
      cameraPositions[cameraMode].target,
      3 * delta
    );
  });
  return (
    <>
      <OrbitControls
        ref={orbitControls}
        onStart={() => {
          setCameraMode(CameraModes.FREE);
        }}
      />
    </>
  );
}
