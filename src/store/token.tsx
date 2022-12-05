import React, { createContext, Dispatch, useReducer } from "react";

const initialState = undefined;

export type TokenState =
  | {
      accessToken: string;
      refreshToken: string;
    }
  | undefined;

export const TokenStateContext = createContext<TokenState>(initialState);

type TokenAction =
  | {
      type: "SIGN_IN";
      payload: TokenState;
    }
  | { type: "SIGN_OUT" };

type TokenDispatch = Dispatch<TokenAction>;

export const TokenDispatchContext =
  createContext<TokenDispatch | undefined>(undefined);

export const tokenReducer = (
  state: TokenState,
  action: TokenAction
): TokenState => {
  switch (action.type) {
    case "SIGN_IN":
      return action.payload;
    case "SIGN_OUT":
      return undefined;
    default:
      return state;
  }
};

export const TokenContext = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(tokenReducer, initialState);

  return (
    <TokenDispatchContext.Provider value={dispatch}>
      <TokenStateContext.Provider value={state}>
        {children}
      </TokenStateContext.Provider>
    </TokenDispatchContext.Provider>
  );
};
