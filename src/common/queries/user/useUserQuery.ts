import { useQuery, UseQueryOptions } from "react-query";
import { getUser } from "../../apis/user";

const useUserQuery = (options?: UseQueryOptions<null>) => {
  const result = useQuery<null>(["getUser"], () => getUser(), options);

  return { ...result };
};

export default useUserQuery;
