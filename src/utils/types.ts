export type Artist = {
  id: string;
  name: string;
  image: string;
  url: string;
};
export type Track = {
  id: string;
  name: string;
  artists: Artist[];
  album: string;
  image: string;
};
export type Album = {
  id: string;
  name: string;
  image: string;
  release_date: string;
  artists: Artist[];
  tracks: Track[];
};
export type Playlist = {
  id: string;
  name: string;
  image: string;
  description: string;
  tracks: Track[];
  creator: string;
};
export type User = {
  display_name: string;
  img: string;
};
