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
    throw error;
  }
};
