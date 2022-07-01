import React, { createContext, Dispatch } from "react";

export type UserState =
  | {
      id: string;
      name: string;
    }
  | undefined;

export const UserStateContext = createContext<UserState>(undefined);

type UserAction =
  | {
      type: "SIGN_IN";
      payload: UserState;
    }
  | { type: "SIGN_OUT" };

type UserDispatch = Dispatch<UserAction>;

export const UserDispatchContext =
  createContext<UserDispatch | undefined>(undefined);

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "SIGN_IN":
      return action.payload;
    case "SIGN_OUT":
      return undefined;
    default:
      return state;
  }
};

export const UserContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserDispatchContext.Provider value={undefined}>
      <UserStateContext.Provider value={undefined}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
};
