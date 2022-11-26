import { atom } from "recoil";

export const bedtimeState = atom({
  key: "bedtime",
  default: true,
});

export const timeState = atom({
  key: "time",
  default: "22:45",
});

export const optimalTimeState = atom({
  key: "optimalTime",
  default: [],
});
