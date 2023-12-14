import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

const superLg = defineStyle({
  width: 60,
  height: 60,
});

const sizes = {
  superLg: definePartsStyle({ container: superLg }),
};

const avatarTheme = defineMultiStyleConfig({ sizes });

export default avatarTheme;
