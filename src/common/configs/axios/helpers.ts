import axios, { AxiosPromise } from "axios";

export const isAxiosError = axios.isAxiosError;

export const resultData = async <T = any>(
  promiseObject: AxiosPromise<{
    data: T;
    result: "SUCCESS" | "ERROR";
    error: { code: string; message: string; data: any };
  }>
): Promise<T> => {
  try {
    const result = await promiseObject;

    return result.data.data;
  } catch (error) {
    // TODO: 실제 에러가 발생했을 때 객체 데이터 어떻게 감지 되는지 확인 후
    // result.data.error 뽑아내기
    console.log(error);
    throw error;
  }
};
