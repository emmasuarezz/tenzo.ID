import { Flex, Heading, Text } from "@chakra-ui/react";
import bg from "../assets/desktopBGyellow.png";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../contexts/UserContext";
import { Error } from "../pages";
import { Album, Playlist } from "../utils/types";

function extractData(array: any) {
  let selection = [] as Album[];

  array.pop();

  selection = array.map((album: any) => {
    let albumData = {} as Album;
    albumData.id = album.id;
    albumData.name = album.name;
    albumData.image = album.images[1].url;
    albumData.release_date = album.release_date;
    albumData.artists = album.artists.map((artist: any) => {
      return { name: artist.name, id: artist.id };
    });
    albumData.tracks = album.tracks.items.map((track: any) => {
      return {
        id: track.id,
        name: track.name,
        artists: track.artists.map((artist: any) => artist.name),
        album: album.name,
      };
    });
    return albumData;
  });

  return selection;
}

const selectedIds = [
  "3XSKAzY7vrFudIP2aafoBE",
  "17bFSSeG8WL6zZevzIvGVO",
  "3wgWsCuJjCRPLt2CLb0bhh",
  "7D2NdGvBHIavgLhmcwhluK",
];

const trackIds = [
  "37i9dQZF1DXdkgnpy3H1Kz",
  "37i9dQZF1DWSnqDRRcBlDX",
  "37i9dQZF1DX2MrqV1P93C9",
  "37i9dQZF1DWWv4Uniffjvs",
  "37i9dQZF1DWXl7Y0piXYnl",
  "37i9dQZF1DWTYPRTIhI2jZ",
];

const getToken = () => {
  let accessToken = "";
  const fragmentParams = new URLSearchParams(window.location.hash.substring(1));
  accessToken = fragmentParams.get("access_token")!;

  localStorage.setItem("token", accessToken);
};
const getUser = async (token: string, context: any) => {
  try {
    const result = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await result.json();

    let currentUser = {
      display_name: data.display_name,
      img: data.images[1].url,
    };

    context.setUser(currentUser);
  } catch (error) {
    console.log(error);
    context.setShowError(true);
  }
};

const getSelected = async (token: string, context: any) => {
  let url = "https://api.spotify.com/v1/albums?ids=";
  selectedIds.forEach((id) => {
    url += `${id}%2C`;
  });

  try {
    const result = await fetch(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await result.json();
    console.log(data);
    let selectedAlbums = extractData(data.albums);
    context.setSelected(selectedAlbums);
  } catch (error) {
    console.log(error);
    context.setShowError(true);
  }
};

const TracksArray = [] as Playlist[];

const getTrackIds = async (token: string, context: any, id: string) => {
  let url = `https://api.spotify.com/v1/playlists/${id}`;
  let trackId = {} as Playlist;

  try {
    const result = await fetch(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await result.json();

    trackId.id = data.id;
    trackId.name = data.name;
    trackId.image = data.images[0].url;
    trackId.tracks = data.tracks.items.map((item: any) => {
      return {
        id: item.track.id,
        name: item.track.name,
      };
    });
    TracksArray.length < 6 && TracksArray.push(trackId);
  } catch (error) {
    console.log(error);
    context.setShowError(true);
  }
};

function Hub() {
  const userContext = useContext(ApiContext);
  const token = localStorage.getItem("token")!;

  useEffect(() => {
    getToken();
    getUser(token, userContext);
    getSelected(token, userContext);
    trackIds.forEach((id) => {
      getTrackIds(token, userContext, id);
    });
    userContext.setTrackIds(TracksArray);
  }, []);

  const content = (
    <div>
      <Flex
        w="100vw"
        h={"100vh"}
        backgroundImage={bg}
        backgroundSize={"cover"}
        px={["20px", "40px", "80px"]}
        direction={"column"}
        align={"center"}
        justify={"center"}
        fontFamily={"Libre Franklin"}
        textAlign={"center"}
      >
        <Heading fontSize={"58px"}>
          Welcome aboard, <span>{userContext.user.display_name}!</span>
        </Heading>
        <Text fontSize={"26px"} fontWeight={600}>
          Glad to see you. Here are all the things you can check out:
        </Text>

        <nav className="hub-nav">
          <li>
            <Link to={"/profile"}>
              <Text
                fontSize={"26px"}
                fontWeight={400}
                textDecoration={"underline"}
                fontStyle={"italic"}
              >
                Profile
              </Text>
            </Link>
          </li>
          <li>
            <Link to={"/home"}>
              <Text
                fontSize={"26px"}
                fontWeight={400}
                textDecoration={"underline"}
                fontStyle={"italic"}
              >
                Home
              </Text>
            </Link>
          </li>
          <li>
            <Link to={"/search"}>
              <Text
                fontSize={"26px"}
                fontWeight={400}
                textDecoration={"underline"}
                fontStyle={"italic"}
              >
                Search
              </Text>
            </Link>
          </li>
        </nav>
      </Flex>
    </div>
  );

  return userContext.showError ? <Error /> : content;
}
export default Hub;
