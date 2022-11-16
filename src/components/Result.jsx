import OutputTimeResult from "./TimeResult";

const OutputTime = () => {
  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-6xl mb-8">Best Bedtime Times</h1>
      <p className="mb-6">It takes an average human about 15 minutes to fall asleep.</p>
      <p className="mb-8">If you go to sleep right now, you should try to wake up at one of the following times:</p>

      <OutputTimeResult />
      <OutputTimeResult />
      <OutputTimeResult />

      <p className="">
        If you wake up at one of these times, you’ll rise in between 90-minute cycles. A good night’s sleep consists of 5-6 complete sleep cycles.
      </p>
    </div>
  );
};

export default OutputTime;
