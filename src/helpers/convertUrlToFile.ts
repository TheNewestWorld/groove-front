const convertURLtoFile = async (url: string) => {
  const data = await fetch(url).then((res) => {
    return res.blob();
  });

  return new File([data], "");
};

export default convertURLtoFile;
