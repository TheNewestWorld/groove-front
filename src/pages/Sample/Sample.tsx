import useSampleQuery from "../../common/queries/sample";

const Sample = () => {
  const { isLoading, data } = useSampleQuery();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      id : {data?.id}
      <br />
      sample : {data?.sample}
    </>
  );
};

export default Sample;
