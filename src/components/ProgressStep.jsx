const circleIcon = (
  <svg height="50" width="50">
    <circle cx="14" cy="25" r="5" fill="#1E40AF" />
  </svg>
);

const tickIcon = (
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
);

const StepContent = ({
  paddingBottomClass,
  postColourClass,
  fillColourClass,
  borderColourClass,
  icon,
  title,
  textColourClass,
}) => {
  return (
    <div className={`relative flex ${paddingBottomClass}`}>
      <div className="absolute inset-0 flex h-full w-8 items-center justify-center">
        <div
          className={`pointer-events-none h-full w-0.5 ${postColourClass}`}
        ></div>
      </div>
      <div
        className={`relative z-10 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${fillColourClass} border-2 border-solid ${borderColourClass} text-white`}
      >
        {icon}
      </div>

      <div className="flex-grow pl-4">
        <h2
          className={`mb-1 mt-1 text-sm uppercase ${textColourClass} font-bold `}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export const FinalStepSubmitted = ({ title }) => (
  <StepContent
    textColourClass="text-gray-600"
    postColourClass="bg-blue-800"
    fillColourClass="bg-blue-800"
    borderColourClass="border-blue-800"
    paddingBottomClass="pb-0"
    title={title}
    icon={tickIcon}
  />
);

export const FinalStepActive = ({ title }) => (
  <StepContent
    textColourClass="text-blue-800"
    postColourClass="bg-gray-300"
    fillColourClass="bg-white"
    borderColourClass="border-blue-800"
    paddingBottomClass="pb-0"
    title={title}
    icon={circleIcon}
  />
);

export const FinalStep = ({ title }) => (
  <StepContent
    textColourClass="text-gray-400"
    postColourClass="bg-gray-300"
    fillColourClass="bg-white"
    borderColourClass="border-gray-300"
    paddingBottomClass="pb-0"
    title={title}
    icon={null}
  />
);

export const FutureStep = ({ title }) => (
  <StepContent
    textColourClass="text-gray-400"
    postColourClass="bg-gray-300"
    fillColourClass="bg-white"
    borderColourClass="border-gray-300"
    paddingBottomClass="pb-10"
    title={title}
    icon={null}
  />
);

export const CurrentStep = ({ title }) => (
  <StepContent
    textColourClass="text-blue-800"
    postColourClass="bg-gray-300"
    fillColourClass="bg-white"
    borderColourClass="border-blue-800"
    paddingBottomClass="pb-10"
    title={title}
    icon={circleIcon}
  />
);

export const PreviousStep = ({ title }) => (
  <StepContent
    textColourClass="text-gray-600"
    postColourClass="bg-blue-800"
    fillColourClass="bg-blue-800"
    borderColourClass="border-blue-800"
    paddingBottomClass="pb-10"
    title={title}
    icon={tickIcon}
  />
);
