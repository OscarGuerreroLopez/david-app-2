import React, {
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
  createContext,
} from "react";
import { ThemeProvider } from "theme-ui";
import { theme } from "./styles";
import {
  LocationContext,
  InitialLocation,
  ILocation,
} from "./utils/locationContext";

import Router from "./router";

interface IUser {
  username: string;
  email: string;
  password: string;
}
interface IUser2 {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

const initialUserData = {
  username: "Oscar",
  email: "hola@hola.com",
  password: "123",
};

export const UserContext2 = createContext<IUser2>({
  user: {
    username: "Oscar",
    email: "hola@hola.com",
    password: "123",
  },
  setUser: () => {},
});
function App() {
  const [user, setUser] = useState<IUser>(initialUserData);

  const providerUserValue: IUser2 = useMemo(() => ({ user, setUser }), [
    user,
    setUser,
  ]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <UserContext2.Provider value={providerUserValue}>
          <Router />
        </UserContext2.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
