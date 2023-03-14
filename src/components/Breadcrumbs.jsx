import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const Separator = () => {
  return (
    <span className="px-2 text-sm font-bold text-blue-800">
      <ChevronIcon />
    </span>
  );
};

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path
      fillRule="evenodd"
      d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
);

export const CrumbText = ({ text }) => {
  return (
    <span className="py-1 text-sm font-bold uppercase text-gray-800">
      {text}
    </span>
  );
};

export const CrumbLink = ({ text, callback }) => {
  const navigate = useNavigate();
  return (
    <span
      onClick={() => callback}
      className="py-1 text-sm font-bold uppercase text-blue-800 decoration-2 underline-offset-4 hover:cursor-pointer hover:underline"
    >
      {text}
    </span>
  );
};
const Breadcrumbs = ({ title, teamUrl, teamName }) => (
  <div className="border-b border-slate-200">
    <div className="_bg-gray-50 _px-8 mx-auto flex h-16 w-full max-w-5xl place-content-start items-center  pt-4 pb-4">
      <span className="py-1 text-sm font-bold uppercase text-blue-800 decoration-2 underline-offset-8 hover:cursor-pointer hover:underline">
        <Link to="/">HOME</Link>
      </span>

      <span className="px-2 text-sm font-bold text-blue-800">
        <ChevronIcon />
      </span>
      <span className="text-sm font-bold uppercase text-blue-800">
        <Link to={`/team/${teamUrl}`}>{teamName}</Link>
      </span>
      <span className="px-2 font-bold text-blue-800">
        <ChevronIcon />
      </span>
      <p className="text-sm font-bold uppercase text-gray-600">{title}</p>
    </div>
  </div>
);

export default Breadcrumbs;
