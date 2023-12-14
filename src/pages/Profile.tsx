import {
  Flex,
  Avatar,
  Heading,
  Text,
  Select,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { Navbar, Card } from "../components";
import { useEffect, useContext, useState } from "react";
import bg from "../assets/desktopBGgreen.png";
import myImage from "../assets/myImage.jpg";
import { ApiContext } from "../contexts/UserContext";

type Track = {
  name: string;
  artist: string;
  img: string;
};
type Artist = {
  name: string;
  img: string;
};

type topTracks = Track[];
type topArtists = Artist[];

const initial = {
  topTracks: [] as topTracks,
  topArtists: [] as topArtists,
};

const getTop = async (token: string, type: string, range: string) => {
  let url = `https://api.spotify.com/v1/me/top/`;
  url += type;
  url += `?time_range=${range}`;
  url += `&limit=5`;

  try {
    const result = await fetch(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await result.json();
    const items = data.items;
    return items;
  } catch (error) {
    console.log(error);
  }
};

const convertToArray = (type: string, items: any) => {
  if (type === "tracks") {
    const tracks = items.map((item: any) => {
      let track = {
        name: item.name,
        artist: item.artists[0].name,
        img: item.album.images[0].url,
      };

      return track;
    });
    console.log(tracks);
    return tracks;
  } else {
    const artists = items.map((item: any) => {
      let artist = {
        name: item.name,
        img: item.images[0].url,
      };
      return artist;
    });
    console.log(artists);
    return artists;
  }
};

const token = localStorage.getItem("token")!;

function Profile() {
  const [topTracks, setTopTracks] = useState(initial.topTracks);
  const [topArtists, setTopArtists] = useState(initial.topArtists);
  const [trackTimeRange, setTrackTimeRange] = useState("medium_term");
  const [artistTimeRange, setArtistTimeRange] = useState("medium_term");

  const userContext = useContext(ApiContext);
  useEffect(() => {
    document.title = "tenzo.ID - Profile";
  }, []);

  useEffect(() => {
    getTop(token, "tracks", trackTimeRange).then((items) => {
      setTopTracks(convertToArray("tracks", items));
    });
    getTop(token, "artists", artistTimeRange).then((items) => {
      setTopArtists(convertToArray("artist", items));
    });
  }, []);

  return (
    <>
      <Flex
        w="100vw"
        backgroundImage={bg}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        direction={"column"}
        paddingX={"20px"}
        fontFamily={"libreFranklin"}
      >
        <Navbar avatar={false} />
        <Flex
          marginTop={"20px"}
          bg={"red.700"}
          width={"270px"}
          height={"270px"}
          align={"center"}
          justify={"center"}
          alignSelf={"center"}
          borderRadius={"50%"}
          shrink={0}
        >
          <Avatar size={"superLg"} src={userContext.user.img} />
        </Flex>
        <Heading
          marginTop={"20px"}
          w={"fit-content"}
          alignSelf={"center"}
          color={"white"}
          fontWeight={600}
          fontFamily={"libreFranklin"}
        >
          Hello{" "}
          <span className="text-accent-green">
            {userContext.user.display_name}
          </span>
        </Heading>
        <Text
          w={"fit-content"}
          alignSelf={"center"}
          color={"white"}
          fontSize={"22px"}
          fontStyle={"italic"}
          fontWeight={400}
        >
          love that photo, you look so cute
        </Text>
        <Flex className="top-container" w={"100%"} mt={"40px"}>
          <Heading
            marginRight={"20px"}
            color={"white"}
            fontFamily={"libreFranklin"}
          >
            your top 5 tracks
          </Heading>

          <Select
            variant={"flushed"}
            color={"green.400"}
            marginTop={"10px"}
            size="sm"
            w={"fit-content"}
            value={trackTimeRange}
            onChange={(e) => {
              setTrackTimeRange(e.target.value);
              getTop(token, "tracks", e.target.value).then((items) => {
                setTopTracks(convertToArray("tracks", items));
              });
            }}
          >
            <option value="short_term">last 4 weeks</option>
            <option value="medium_term">last 6 months</option>
            <option value="long_term">way too long ago</option>
          </Select>
        </Flex>
        <Flex className="top" w={"100%"} my={"20px"}>
          <SimpleGrid
            columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
            spacingX="80px"
            spacingY={"20px"}
          >
            <Card colorBg="green" items={topTracks} type="tracks" />
          </SimpleGrid>
        </Flex>
        <Divider borderColor="green.400" />
        <Flex className="top" w={"fit-content"} mt={"10px"}>
          <Heading
            marginRight={"20px"}
            color={"white"}
            fontFamily={"libreFranklin"}
          >
            your top 5 artists
          </Heading>

          <Select
            variant={"flushed"}
            color={"green.400"}
            marginTop={"10px"}
            size="sm"
            w={"fit-content"}
            value={artistTimeRange}
            onChange={(e) => {
              setArtistTimeRange(e.target.value);
              getTop(token, "artists", e.target.value).then((items) => {
                setTopArtists(convertToArray("artist", items));
              });
            }}
          >
            <option value="short_term">last 4 weeks</option>
            <option value="medium_term">last 6 months</option>
            <option value="long_term">way too long ago</option>
          </Select>
        </Flex>
        <Flex className="top" w={"100%"} mt={"20px"} mb={"40px"}>
          <SimpleGrid
            columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
            spacingX="80px"
            spacingY={"20px"}
          >
            <Card colorBg="green" type="artists" items={topArtists} />
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}

export default Profile;
