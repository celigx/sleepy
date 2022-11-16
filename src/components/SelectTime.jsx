import SuggestionButton from "./SuggestionButton";

const ChooseTime = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-6xl text-center">08:00</h1>
        <p className="text-lg text-center">Time now</p>
      </div>

      <div className="flex justify-center mb-8">
        <button className="bg-blue-900 rounded-lg px-6 py-3 mr-8 hover:bg-blue-700 ease-in duration-200">Bedtime</button>
        <button className="bg-blue-900 rounded-lg px-6 py-3 hover:bg-blue-700 ease-in duration-200">Wake up</button>
      </div>

      <div className="">
        <p className="text-md mb-2">Choose time</p>
        <input
          type="time"
          className="flex justify-center bg-transparent border-solid border-2 rounded-lg w-full p-2 mx-auto mb-8"
          style={{ borderColor: "#ABBAED" }}
        />
      </div>

      <div className="mb-8">
        <h1 className="text-2xl mb-8">Suggestion</h1>
        <SuggestionButton />
        <SuggestionButton />
      </div>
      <button className="bg-indigo-400 text-blue-900 text-xl rounded-xl w-full px-6 py-3 hover:bg-indigo-300 ease-in duration-200">Suggest</button>
    </div>
  );
};

export default ChooseTime;
