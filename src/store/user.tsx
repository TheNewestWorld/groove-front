import React, { createContext, Dispatch } from "react";

export interface UserState {
  id: string | undefined;
  name: string | undefined;
}

const initialState: UserState = {
  id: undefined,
  name: undefined,
};

const UserStateContext = createContext<UserState>(initialState);

interface UserAction {
  type: "SIGN_IN" | "SIGN_OUT";
  payload: UserState;
}

type UserDispatch = Dispatch<UserAction>;

const UserDispatchContext = createContext<UserDispatch | undefined>(undefined);

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "SIGN_IN":
      return action.payload;
    case "SIGN_OUT":
      return initialState;
    default:
      return state;
  }
};

export const UserContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserDispatchContext.Provider value={undefined}>
      <UserStateContext.Provider value={initialState}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
};
