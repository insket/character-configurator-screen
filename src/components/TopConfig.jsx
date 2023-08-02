import React from "react";
import { Button, Stack, Group, ColorInput } from "@mantine/core";
import {
  SwatchesColors,
  useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext";

export default function TopConfig() {
  const { shirtColor, setShirtColor } = useCharacterCustomization();

  return (
    <Stack spacing={"sm"} py={"sm"}>
      <ColorInput
        label="shirt"
        format="hex"
        swatches={SwatchesColors}
        value={shirtColor}
        onChange={setShirtColor}
      />
    </Stack>
  );
}
