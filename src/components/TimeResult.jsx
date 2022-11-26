import { useRecoilValue } from "recoil";
import { bedtimeState } from "../atoms";

const OutputTimeResult = ({ item }) => {
  const { title, optimalSleepTime, sleepLength, sleepQuality } = item;

  const bedtime = useRecoilValue(bedtimeState);

  return (
    <div className="container mx-auto bg-blue-900 flex items-center justify-between px-3 py-3 rounded-xl mb-8">
      <div className="text-center">
        <h1 className="text-md mb-2">{title}</h1>
        <p className="text-xl md:text-3xl">{optimalSleepTime}</p>
      </div>
      <div className="flex items-center text-center">
        <div className="mr-4">
          <h1 className="text-md mb-2">Sleep Time</h1>
          <p className="text-xl md:text-3xl">{sleepLength}</p>
        </div>
        <div className="bg-blue-200 rounded-xl p-3">
          <h1 className="text-blue-900 text-xl font-bold text-left mb-1">{sleepQuality}%</h1>
          <p className="text-blue-900 text-sm">sleep quality</p>
        </div>
      </div>
    </div>
  );
};

export default OutputTimeResult;
