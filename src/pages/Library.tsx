import { Flex } from "@chakra-ui/react";

import { Navbar } from "../components";
import { useEffect } from "react";

import bg from "../assets/desktopBG.png";

function Library() {
  useEffect(() => {
    document.title = "tenzo.ID - Library";
  }, []);
  return (
    <>
      <Flex
        h="100vh"
        w="100vw"
        backgroundImage={bg}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        direction={"column"}
      >
        <Navbar active="library" avatar />
      </Flex>
    </>
  );
}

export default Library;
