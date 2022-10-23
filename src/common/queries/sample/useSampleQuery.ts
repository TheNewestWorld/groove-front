import { useQuery, UseQueryOptions } from "react-query";
import { getSample, SampleResponse } from "../../apis/sample";

const useSampleQuery = (options?: UseQueryOptions<SampleResponse>) => {
  const result = useQuery<SampleResponse>(
    ["getSample"],
    () => getSample(),
    options
  );

  return { ...result };
};

export default useSampleQuery;
