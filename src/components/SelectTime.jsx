import * as dayjs from "dayjs";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { bedtimeState, timeState } from "../atoms";

import SuggestionButton from "./SuggestionButton";

const ChooseTime = () => {
  const [input, setInput] = useState("22:45");

  const [bedtime, setBedtime] = useRecoilState(bedtimeState);
  const setTime = useSetRecoilState(timeState);

  const formattedTime = dayjs().format("HH:mm");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleBedtime = () => {
    setBedtime(true);
  };

  const handleWakeUp = () => {
    setBedtime(false);
  };

  const handleCalculate = () => {
    setTime(input);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-6xl text-center">{formattedTime}</h1>
        <p className="text-lg text-center">Time now</p>
      </div>

      <div className="flex justify-center mb-8">
        <button
          className={
            bedtime
              ? "bg-blue-700 rounded-lg px-6 py-3 mr-8 hover:bg-blue-700 ease-in duration-200"
              : "bg-blue-900 rounded-lg px-6 py-3 mr-8 hover:bg-blue-700 ease-in duration-200"
          }
          onClick={handleBedtime}
        >
          I want to go to bed at
        </button>
        <button
          className={
            bedtime
              ? "bg-blue-900 rounded-lg px-6 py-3 hover:bg-blue-700 ease-in duration-200"
              : "bg-blue-700 rounded-lg px-6 py-3 hover:bg-blue-700 ease-in duration-200"
          }
          onClick={handleWakeUp}
        >
          I want to wake up at
        </button>
      </div>

      <div className="">
        <label htmlFor="time" className="text-md block mb-2">
          Choose time
        </label>
        <input
          type="time"
          id="time"
          name="time"
          className="flex justify-center bg-transparent border-solid border-2 rounded-lg w-full p-2 mx-auto mb-8"
          style={{ borderColor: "#ABBAED" }}
          value={input}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-8">
        <h1 className="text-2xl mb-8">Suggestion</h1>
        <SuggestionButton bedtime={"21:45"} wakeup={"06:00"} handleTime={() => setInput("21:45")} />
        <SuggestionButton bedtime={"22:45"} wakeup={"07:00"} handleTime={() => setInput("22:45")} />
      </div>
      <button className="bg-indigo-400 text-blue-900 text-xl rounded-xl w-full px-6 py-3 hover:bg-indigo-300 ease-in duration-200" onClick={handleCalculate}>
        CALCULATE
      </button>
    </div>
  );
};

export default ChooseTime;
