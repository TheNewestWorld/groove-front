const times: { time: string; milliSeconds: number }[] = [
  { time: "분", milliSeconds: 1000 * 60 },
  { time: "시간", milliSeconds: 1000 * 60 * 60 },
  { time: "일", milliSeconds: 1000 * 60 * 60 * 24 },
  { time: "개월", milliSeconds: 1000 * 60 * 60 * 24 * 30 },
  { time: "년", milliSeconds: 1000 * 60 * 60 * 24 * 365 },
].reverse();

export const convertToElapsedTime = (createdTime: Date) => {
  const now = new Date().getTime();
  const diff = now - createdTime.getTime();

  for (const value of times) {
    const elapsedTime = Math.floor(diff / value.milliSeconds);
    if (elapsedTime > 0) {
      return `${elapsedTime}${value.time}전`;
    }
  }

  return "방금 전";
};

export const isThisMonth = (createdTime: Date) => {
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);

  return createdTime > firstDay;
}