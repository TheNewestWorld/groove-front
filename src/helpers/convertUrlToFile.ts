const convertURLtoFile = async (url: string) => {
  const data = await fetch(url).then((res) => {
    return res.blob();
  });
  console.log(data);
  return new File([data], "");
};

export default convertURLtoFile;
