import { TokenContext } from "./token";
import { UserContext } from "./user";

export {
  UserContext,
  userReducer,
  UserDispatchContext,
  UserStateContext,
} from "./user";

export {
  TokenContext,
  tokenReducer,
  TokenDispatchContext,
  TokenStateContext,
} from "./token";

type Props = {
  children: React.ReactNode;
};

export const Context = ({ children }: Props) => {
  return (
    <UserContext>
      <TokenContext>{children}</TokenContext>
    </UserContext>
  );
};
