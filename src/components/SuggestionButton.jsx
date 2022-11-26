const SuggestionButton = ({ bedtime, wakeup, handleTime }) => {
  return (
    <button className="container mx-auto bg-blue-900 flex justify-between px-6 py-3 rounded-xl mb-8" onClick={handleTime}>
      <div className="text-center">
        <h1 className="text-md mb-2">Bedtime</h1>
        <p className="text-3xl">{bedtime}</p>
      </div>
      <div className="text-center">
        <h1 className="text-md mb-2">Wake up</h1>
        <p className="text-3xl">{wakeup}</p>
      </div>
    </button>
  );
};

export default SuggestionButton;
