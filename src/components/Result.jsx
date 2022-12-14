import { useEffect } from "react";
import * as dayjs from "dayjs";
import { nanoid } from "nanoid";
import { useRecoilState, useRecoilValue } from "recoil";
import { bedtimeState, optimalTimeState, timeState } from "../atoms";
import OutputTimeResult from "./TimeResult";

const OutputTime = () => {
  const bedtime = useRecoilValue(bedtimeState);
  const time = useRecoilValue(timeState);
  const [optimalTime, setOptimalTime] = useRecoilState(optimalTimeState);

  useEffect(() => {
    calculateOptimalTime();
    // eslint-disable-next-line
  }, [bedtime, time]);

  const getTime = dayjs().format(`YYYY-MM-DD ${time}`);

  // 4 * 90 min sleep cycle
  const fourthCycle = 360;
  // 5 * 90 min sleep cycle
  const fifthCycle = 450;
  // 6 * 90 min sleep cycle
  const sixthCycle = 540;
  // Add 15 min needed for an avg human to fall asleep
  const add15min = 15;

  // Calculate optimal times to go to sleep or wake up
  const handleOptimalTime = (minutes) => {
    const addSleepCycle = dayjs(getTime).add(minutes, "m").add(add15min, "m").format("HH:mm");
    const subtractSleepCycle = dayjs(getTime).subtract(minutes, "m").subtract(add15min, "m").format("HH:mm");

    if (bedtime) {
      return addSleepCycle;
    }

    return subtractSleepCycle;
  };

  // Calculate total sleep time
  const handleSleepLength = (minutes) => {
    // Get selected time + sixthCycle
    const updatedTime = dayjs(getTime).add(sixthCycle, "m");
    const differenceInMinutes = updatedTime.diff(getTime, "m");
    const totalDifferenceInMinutes = differenceInMinutes - minutes;

    // Format time (07 hours / 07 hr 10 min)
    const getHours = Math.floor(totalDifferenceInMinutes / 60);
    const getMinutes = totalDifferenceInMinutes % 60;

    if (getMinutes === 0) {
      return `${getHours} hours`;
    }

    return `${getHours} hr ${getMinutes} min`;
  };

  // Calculate sleep quality
  const handleSleepQuality = (sleepCycle) => {
    const minutesInAnHour = 60;
    const totalSleepHours = 9;

    return Math.round((sleepCycle / minutesInAnHour / totalSleepHours) * 100);
  };

  // Calculate optimal sleep or wake times
  const calculateOptimalTime = () => {
    const title = bedtime ? "Wakeup" : "Bedtime";

    setOptimalTime([
      {
        id: nanoid(),
        title: title,
        optimalSleepTime: handleOptimalTime(sixthCycle),
        sleepLength: handleSleepLength(0),
        sleepQuality: handleSleepQuality(sixthCycle),
      },
      {
        id: nanoid(),
        title: title,
        optimalSleepTime: handleOptimalTime(fifthCycle),
        sleepLength: handleSleepLength(90),
        sleepQuality: handleSleepQuality(fifthCycle),
      },
      {
        id: nanoid(),
        title: title,
        optimalSleepTime: handleOptimalTime(fourthCycle),
        sleepLength: handleSleepLength(180),
        sleepQuality: handleSleepQuality(fourthCycle),
      },
    ]);
  };

  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-6xl mb-8">{bedtime ? "Best Wake up Times" : "Best Bedtime Times"}</h1>
      <p className="mb-2">It takes an average human about 15 minutes to fall asleep.</p>
      <p className="mb-8">
        {bedtime
          ? `To wake up refreshed in the morning, you should go to bed at one of the following times:`
          : "If you go to sleep right now, you should try to wake up at one of the following times:"}
      </p>

      {optimalTime.map((item) => (
        <OutputTimeResult key={item.id} item={item} />
      ))}
      <p className="mb-0">
        If you wake up at one of these times, you???ll rise in between 90-minute cycles. A good night???s sleep consists of 5-6 complete sleep cycles.
      </p>
    </div>
  );
};

export default OutputTime;
