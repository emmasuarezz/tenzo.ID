import { Link } from "react-router-dom";
import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import { VscRefresh as ReloadIcon } from "react-icons/vsc";
import bg from "../assets/desktopBGyellow.png";

const refresh = () => {
  window.location.reload();
};

function Error() {
  return (
    <Flex
      w="100vw"
      h={"100vh"}
      backgroundImage={bg}
      backgroundSize={"cover"}
      px={["20px", "40px", "80px"]}
      direction={"column"}
      align={"center"}
      justify={"center"}
    >
      <Flex w={"100%"} direction={"column"}>
        <Heading alignSelf={"center"} fontSize={"58px"}>
          Oops, seems like something didn't work as intended...
        </Heading>
        <Heading fontStyle={"italic"} fontWeight={500}>
          Don't worry, we can always refresh and try again,{" "}
          <span className="text-accent-green">just like in real life</span>
        </Heading>
        <Button
          onClick={refresh}
          w={"fit-content"}
          alignSelf={"left"}
          leftIcon={<ReloadIcon />}
          size={"lg"}
          variant={"outline"}
          mt={"22px"}
          colorScheme="black-alpha"
        >
          Reload
        </Button>
      </Flex>
      <Flex gap={"6px"} fontSize={"18px"} className="subtitle">
        <Text>Hey if you have done it twice or more try logging in again.</Text>
        <Link to={"/"}>
          <Text
            fontStyle={"italic"}
            textDecoration={"underline"}
            cursor={"pointer"}
          >
            Go back to login.
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Error;
