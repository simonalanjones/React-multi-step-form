const TeamItem = ({ teamName, selected, selectedCallback }) => {
  return !selected ? (
    <div
      className="mb-6 flex w-64 rounded-md bg-gray-200 py-2 hover:cursor-pointer  hover:bg-gray-300"
      onClick={selectedCallback}
    >
      <div className="mx-auto text-sm font-semibold text-slate-500">
        {teamName}
      </div>
    </div>
  ) : (
    <div className="mb-6 flex w-64 rounded-md bg-blue-600 py-2">
      <div className="mx-auto text-sm font-semibold text-white">{teamName}</div>
    </div>
  );
};

export default TeamItem;
