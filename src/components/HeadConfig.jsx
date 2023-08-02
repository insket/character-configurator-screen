import React from "react";
import {
  Button,
  Stack,
  Group,
  ColorInput,
  Title,
  Text,
  Slider,
} from "@mantine/core";
import {
  SwatchesColors,
  useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext";

export default function HeadConfig() {
  const {
    hairColor,
    setHairColor,
    eyesColor,
    setEyesColor,
    mouthColor,
    setMouthColor,
    glassesColor,
    setGlassesColor,
    skinColor,
    setSkinColor,
    morphTargetDictionary,
    setMorphTargetDictionary,
    morphTargetInfluences,
    setMorphTargetInfluences,
  } = useCharacterCustomization();

  return (
    <Stack spacing={"sm"} py={"sm"}>
      <ColorInput
        label="Hair"
        format="hex"
        swatches={SwatchesColors}
        value={hairColor}
        onChange={setHairColor}
      />
      <ColorInput
        label="Eye"
        format="hex"
        swatches={SwatchesColors}
        value={eyesColor}
        onChange={setEyesColor}
      />
      <ColorInput
        label="mouth"
        format="hex"
        swatches={SwatchesColors}
        value={mouthColor}
        onChange={setMouthColor}
      />
      <ColorInput
        label="glass"
        format="hex"
        swatches={SwatchesColors}
        value={glassesColor}
        onChange={setGlassesColor}
      />
      <ColorInput
        label="skin"
        format="hex"
        swatches={SwatchesColors}
        value={skinColor}
        onChange={setSkinColor}
      />
      <Title order={3}>Expressions</Title>

      {morphTargetDictionary.map((morphTarget, index) => {
        return (
          <Stack key={index}>
            <Text>{morphTarget}</Text>
            <Slider
              min={0}
              max={1}
              step={0.001}
              label={(value) => Math.round(value * 100)}
              value={morphTargetInfluences[index]}
              onChange={(value) => {
                morphTargetInfluences[index] = value;
                setMorphTargetInfluences([...morphTargetInfluences]);
              }}
            />
          </Stack>
        );
      })}
    </Stack>
  );
}
