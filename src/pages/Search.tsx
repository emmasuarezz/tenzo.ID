import { Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";

import { Navbar, Searchbar, Card } from "../components";
import { useEffect } from "react";

import bg from "../assets/desktopBG.png";

function Search() {
  useEffect(() => {
    document.title = "tenzo.ID - Search";
  }, []);
  return (
    <>
      <Flex
        w="100vw"
        backgroundImage={bg}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        direction={"column"}
      >
        <Navbar active="search" avatar />
        <Flex direction={"column"} color={"white"} px={"20px"}>
          <Heading>What are we going to listen today?</Heading>
          <Text fontWeight={300} fontSize={"20px"} fontStyle={"italic"}>
            get started searching for a track, album or artist.
          </Text>
        </Flex>
        <Searchbar />
        <Heading
          fontWeight={600}
          fontSize={"32px"}
          color={"green.400"}
          marginTop={"20px"}
          padding={"20px"}
        >
          tracks
        </Heading>
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
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
        </Flex>

        <Heading
          fontWeight={600}
          fontSize={"32px"}
          color={"green.400"}
          marginTop={"20px"}
          padding={"20px"}
        >
          albums
        </Heading>
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
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
        </Flex>

        <Heading
          fontWeight={600}
          fontSize={"32px"}
          color={"green.400"}
          marginTop={"20px"}
          padding={"20px"}
        >
          artists
        </Heading>
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
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
          <Card colorBg="green" />
        </Flex>
      </Flex>
    </>
  );
}

export default Search;
