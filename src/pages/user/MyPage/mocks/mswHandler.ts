import { 유저_정보 } from "../../../../common/mocks/users";
import { 작성한_글_목록, 좋아요_글_목록, 녹음내역_목록 } from "./mockApi";

export const 데이터_있음 = [
  유저_정보.그루브_유저,
  작성한_글_목록.데이터_있음,
  좋아요_글_목록.데이터_있음,
  녹음내역_목록.데이터_있음,
];

export const 데이터_없음 = [
  유저_정보.그루브_유저,
  작성한_글_목록.데이터_없음,
  좋아요_글_목록.데이터_없음,
  녹음내역_목록.데이터_없음,
];
