import { Flex, Avatar } from "@chakra-ui/react";
import { useContext } from "react";
import { ApiContext } from "../contexts/UserContext";

function AvatarBox() {
  const userContext = useContext(ApiContext);
  return (
    <Flex
      bg={"red.900"}
      width={"80px"}
      height={"80px"}
      align={"center"}
      justify={"center"}
      borderRadius={"50%"}
      shrink={0}
    >
      <Avatar size="lg" name="Tenzo Suarez" src={userContext.user.img} />
    </Flex>
  );
}

export default AvatarBox;
