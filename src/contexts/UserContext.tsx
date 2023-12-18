import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Album, Playlist, User } from "../utils/types";

const initial = {
  user: {
    display_name: "",
    img: "",
  },
  setUser: (() => {}) as Dispatch<SetStateAction<User>>,
  selected: [] as Album[],
  trackIds: [] as Playlist[],
  setTrackIds: (() => {}) as Dispatch<SetStateAction<Playlist[]>>,
  setSelected: (() => {}) as Dispatch<SetStateAction<Album[]>>,
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
