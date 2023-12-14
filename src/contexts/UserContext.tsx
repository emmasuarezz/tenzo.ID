import { Dispatch, SetStateAction, createContext, useState } from "react";

type User = {
  display_name: string;
  img: string;
};
type Artist = {
  name: string;
  id: string;
};
type Track = {
  id: string;
  name: string;
  artists: string[];
  album: string;
};
export type Album = {
  id: string;
  name: string;
  img: string;
  release_date: string;
  artists: Artist[];
  tracks: Track[];
};
export type Playlist = {
  id: string;
  name: string;
  img: string;
  tracks: Track[];
};
export type Playlists = Playlist[];
type Albums = Album[];

const initial = {
  user: {
    display_name: "",
    img: "",
  },
  setUser: (() => {}) as Dispatch<SetStateAction<User>>,
  selected: [] as Albums,
  trackIds: [] as Playlists,
  setTrackIds: (() => {}) as Dispatch<SetStateAction<Playlists>>,
  setSelected: (() => {}) as Dispatch<SetStateAction<Albums>>,
  showError: false,
  setShowError: (() => {}) as Dispatch<SetStateAction<boolean>>,
};

export const ApiContext = createContext(initial);

export const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState(initial.user);
  const [selected, setSelected] = useState(initial.selected);
  const [trackIds, setTrackIds] = useState(initial.trackIds);
  const [showError, setShowError] = useState(false);

  return (
    <ApiContext.Provider
      value={{
        user,
        setUser,
        selected,
        setSelected,
        showError,
        setShowError,
        trackIds,
        setTrackIds,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
