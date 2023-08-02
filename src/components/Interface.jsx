import { Affix, Button, Stack, Group } from "@mantine/core";
import { IconAdjustments } from "@tabler/icons-react";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import {
  CameraModes,
  useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext";
import HeadConfig from "./HeadConfig";
import TopConfig from "./TopConfig";
import BottomConfig from "./BottomConfig";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();

  const { cameraMode, setCameraMode, setTakeScreenshot, takeScreenshot } =
    useCharacterCustomization();
  return (
    <>
      <Affix position={{ top: 20, right: 20 }}>
        <Button onClick={() => setTakeScreenshot(true)}>
          <IconAdjustments size={18} />
        </Button>
        <Group>
          {Object.keys(CameraModes).map((mode) => {
            return (
              <Button
                key={mode}
                variant={mode === cameraMode ? "filled" : "light"}
                onClick={() => setCameraMode(mode)}
              >
                {mode}
              </Button>
            );
          })}
        </Group>
      </Affix>

      <Affix position={{ top: 50, right: 200 }}>
        {cameraMode === CameraModes.HEAD && <HeadConfig></HeadConfig>}
      </Affix>

      <Affix position={{ top: 50, right: 20 }}>
        {cameraMode === CameraModes.TOP && <TopConfig></TopConfig>}
      </Affix>
      <Affix position={{ top: 50, right: 20 }}>
        {cameraMode === CameraModes.BOTTOM && <BottomConfig></BottomConfig>}
      </Affix>

      <Affix position={{ bottom: 50, right: 20 }}>
        <Stack>
          {animations.map((animation, index) => (
            <Button
              key={animation}
              variant={index === animationIndex ? "filled" : "light"}
              onClick={() => setAnimationIndex(index)}
            >
              {animation}
            </Button>
          ))}
        </Stack>
      </Affix>
    </>
  );
};

export default Interface;
