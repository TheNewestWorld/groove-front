import React, { createContext, Dispatch, useReducer } from "react";

const initialState = undefined;

export type UserState =
  | {
      name: string;
      profile: string;
    }
  | undefined;

export const UserStateContext = createContext<UserState>(initialState);

type UserAction =
  | {
      type: "SET";
      payload: UserState;
    }
  | { type: "DELETE" };

type UserDispatch = Dispatch<UserAction>;

export const UserDispatchContext =
  createContext<UserDispatch | undefined>(undefined);

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "DELETE":
      return undefined;
    default:
      return state;
  }
};

export const UserContext = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
};
