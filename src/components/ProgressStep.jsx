export const ProgressStep = ({
  title,
  selected,
  lastStep,
  previous,
  current,
}) => {
  const icon =
    previous === true ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clipRule="evenodd"
        />
      </svg>
    ) : current === true ? (
      <svg height="50" width="50">
        <circle cx="14" cy="25" r="5" fill="#4f46e5" />
      </svg>
    ) : null;

  const postLength = lastStep !== true ? 12 : 0;

  const textColour =
    current === true
      ? 'text-indigo-600'
      : previous === true
      ? 'text-gray-600'
      : 'text-gray-400';

  const postColour =
    previous === true && selected === false ? 'bg-indigo-600' : 'bg-gray-300';

  const fillColour = previous === true ? 'bg-indigo-600' : 'bg-white';

  const borderColour =
    current === true || previous === true
      ? 'border-indigo-600'
      : 'border-gray-300';

  return (
    <>
      <div className={`relative flex pb-${postLength}`}>
        {lastStep !== true && (
          <div className="absolute inset-0 flex h-full w-8 items-center justify-center">
            <div
              className={`pointer-events-none h-full w-0.5 ${postColour}`}
            ></div>
          </div>
        )}
        <div
          className={`relative z-10 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${fillColour} border-2 border-solid ${borderColour} text-white`}
        >
          {icon}
        </div>

        <div className="flex-grow pl-4">
          <h2
            className={`title-font mb-1 mt-1 text-sm uppercase ${textColour} font-bold`}
          >
            {title}
          </h2>
        </div>
      </div>
    </>
  );
};
