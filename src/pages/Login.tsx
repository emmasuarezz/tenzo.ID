import { Flex, Heading, Text } from "@chakra-ui/react";
import { LoginButton } from "../components";

import "../styles/index.css";
import bg from "../assets/desktopBG.png";

function Login() {
  return (
    <>
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
        <Flex direction={"column"}>
          <Heading
            color={"green.400"}
            fontSize={["80px", "90px", "120px"]}
            fontFamily={"alfaSlab"}
          >
            tenzo.ID
          </Heading>
          <Text
            mt={"-22px"}
            color={"white"}
            fontSize={["24px", "32px", "36px"]}
            textAlign={"left"}
            fontWeight={400}
            fontFamily={"libreFranklin"}
          >
            retrieve all the metadata you want from your favorite&nbsp;
            <span className="text-accent">tracks!</span>
          </Text>
        </Flex>
        <Flex mt={"20px"} direction={"row"} align={"center"}>
          <Text
            color={"white"}
            fontSize={["24px", "32px", "36px"]}
            mr={"10px"}
            textAlign={"center"}
            fontWeight={300}
            fontStyle={"italic"}
            fontFamily={"libreFranklin"}
          >
            login with
          </Text>
          <LoginButton />
        </Flex>
      </Flex>
    </>
  );
}

export default Login;
