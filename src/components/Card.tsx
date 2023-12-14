import { Flex, Center, Text, Image } from "@chakra-ui/react";
import "../styles/index.css";
type Track = {
  name: string;
  artist: string;
  img: string;
  id: string;
};
type Artist = {
  name: string;
  img: string;
  id: string;
};

type CardProps = {
  items: (Track | Artist)[];
  type: string;
  colorBg: string;
};

type result = JSX.Element[];

function Card({ colorBg, type, items }: CardProps) {
  let result = [] as result;

  if (type === "tracks") {
    result = items.map((item) => {
      return (
        <Flex
          direction={"column"}
          align={"center"}
          w={[100, 150, 200]}
          color={"white"}
          fontWeight={400}
          key={item.id}
        >
          <Flex
            className={
              colorBg == "red" ? "card-gradient" : "card-gradient-green"
            }
            w={[150, 200]}
            h={[150, 200]}
            paddingX={"3px"}
            paddingBottom={"5px"}
          >
            <Center
              w={"100%"}
              h={"100%"}
              backgroundColor={colorBg == "red" ? "red.900" : "green.400"}
              borderRadius={"10px"}
            >
              <Image borderRadius={"10px"} src={item.img}></Image>
            </Center>
          </Flex>
          <Text
            mt={"5px"}
            wordBreak={"break-word"}
            fontSize={["16px", "18px"]}
            textAlign={"center"}
          >
            {item.name}
          </Text>
          <Text
            mt={"5px"}
            wordBreak={"break-word"}
            fontSize={["16px", "18px"]}
            textAlign={"center"}
          ></Text>
        </Flex>
      );
    });
  }

  if (type === "artists") {
    result = items.map((item) => {
      return (
        <Flex
          direction={"column"}
          align={"center"}
          w={[100, 150, 200]}
          color={"white"}
          fontWeight={400}
        >
          <Flex
            className={
              colorBg == "red" ? "card-gradient" : "card-gradient-green"
            }
            w={[150, 200]}
            h={[150, 200]}
            paddingX={"3px"}
            paddingBottom={"5px"}
          >
            <Center
              w={"100%"}
              h={"100%"}
              backgroundColor={colorBg == "red" ? "red.900" : "green.400"}
              borderRadius={"10px"}
            >
              <Image borderRadius={"10px"} src={item.img}></Image>
            </Center>
          </Flex>
          <Text
            mt={"5px"}
            wordBreak={"break-word"}
            fontSize={["16px", "18px"]}
            textAlign={"center"}
          >
            {item.name}
            {"artist" in item && item.artist}
          </Text>
        </Flex>
      );
    });
  }

  return result;
}

export default Card;
