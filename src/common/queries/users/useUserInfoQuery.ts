import { useQuery, UseQueryOptions } from "react-query";
import { getUserInfo, GetUserInfoResponse } from "../../apis/users";

const useUserInfoQuery = (options?: UseQueryOptions<GetUserInfoResponse>) => {
  const result = useQuery<GetUserInfoResponse>(
    ["getUserInfo"],
    () => getUserInfo(),
    options
  );

  return { ...result };
};

export default useUserInfoQuery;
