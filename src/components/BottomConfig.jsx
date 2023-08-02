import React from "react";
import { Button, Stack, Group, ColorInput } from "@mantine/core";
import {
  SwatchesColors,
  useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext";

export default function BottomConfig() {
  const {
    pantsColor,
    setPantsColor,
    shoesColor,
    setShoesColor,
    lacesColor,
    setLacesColor,
    soleColor,
    setSoleColor,
  } = useCharacterCustomization();

  return (
    <Stack spacing={"sm"} py={"sm"}>
      <ColorInput
        label="Pants"
        format="hex"
        swatches={SwatchesColors}
        value={pantsColor}
        onChange={setPantsColor}
      />
      <ColorInput
        label="Pants"
        format="hex"
        swatches={SwatchesColors}
        value={shoesColor}
        onChange={setShoesColor}
      />
      <ColorInput
        label="Pants"
        format="hex"
        swatches={SwatchesColors}
        value={lacesColor}
        onChange={setLacesColor}
      />
      <ColorInput
        label="Pants"
        format="hex"
        swatches={SwatchesColors}
        value={soleColor}
        onChange={setSoleColor}
      />
    </Stack>
  );
}
