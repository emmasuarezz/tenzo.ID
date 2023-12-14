import { Flex } from "@chakra-ui/react";
import "../styles/index.css";

function Searchbar() {
  return (
    <Flex
      bg={"red.900"}
      width={"100%"}
      height={"80px"}
      align={"center"}
      justify={"center"}
      shrink={0}
      mt={"20px"}
    >
      <input
        className="searchbar"
        type="text"
        placeholder="Search for a track, album or artist"
      />
    </Flex>
  );
}

export default Searchbar;
