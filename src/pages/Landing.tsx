import { Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useContext, useState } from "react";
import { ApiContext } from "../contexts/UserContext";

import { Navbar, Card } from "../components";

import "../styles/index.css";
import bg from "../assets/desktopBG.png";

function Landing() {
  const UserContext = useContext(ApiContext);
  useEffect(() => {
    document.title = "tenzo.ID - Home";
  }, []);

  return (
    <>
      <Flex
        w="100vw"
        backgroundImage={bg}
        backgroundSize={"cover"}
        direction={"column"}
        fontFamily={"libreFranklin"}
      >
        <Navbar active="home" avatar />
        <Flex w={"fit-content"} direction={"column"} color={"white"} p={"20px"}>
          <Heading display={"flex"} fontWeight={600} fontSize={"32px"}>
            good morning&nbsp;
            <span className="text-accent">{UserContext.user.display_name}</span>
          </Heading>
          <Text fontWeight={400} fontStyle={"italic"} fontSize={24}>
            selected for you, by yours truly{" "}
            <span className="text-green">{`<3`}</span>
          </Text>
        </Flex>
        <Flex justify={"center"} w={"100%"} mt={"20px"} mb={"40px"} px={"20px"}>
          <Flex
            w={"100%"}
            mt={"20px"}
            mb={"40px"}
            px={"20px"}
            pb={"20px"}
            flexShrink={0}
            overflowX={"scroll"}
            gap={"80px"}
          >
            <Card colorBg="red" type="artists" items={UserContext.selected} />
          </Flex>
        </Flex>
        <Heading
          display={"flex"}
          fontWeight={600}
          fontSize={"32px"}
          color={"white"}
          marginTop={"20px"}
          padding={"20px"}
        >
          track IDs
        </Heading>
        <Flex className="top" w={"100%"} mt={"20px"} mb={"40px"} px={"20px"}>
          <Flex
            w={"100%"}
            mt={"20px"}
            mb={"40px"}
            px={"40px"}
            pb={"20px"}
            flexShrink={0}
            overflowX={"scroll"}
            gap={"80px"}
          >
            <Card colorBg="green" type="artists" items={UserContext.trackIds} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Landing;
