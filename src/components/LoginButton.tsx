import { IconButton, Image } from "@chakra-ui/react";
import { requestAuth } from "../spotifyAPI";
import SpotifyBG from "../assets/spotifyBG.png";

const LoginButton = () => {
  return (
    <IconButton
      w={"150px"}
      h={"50px"}
      bg={"black"}
      onClick={requestAuth}
      aria-label="Login with Spotify"
      icon={<Image objectFit="fill" w={"60%"} sizes="" src={SpotifyBG} />}
    />
  );
};

export default LoginButton;
