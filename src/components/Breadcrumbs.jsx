import { useNavigate } from 'react-router-dom';

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

const Breadcrumbs = () => {
  // function Breadcrumbs() {
  //   let matches = useMatches();
  //   let crumbs = matches
  //     // first get rid of any matches that don't have handle and crumb
  //     .filter((match) => Boolean(match.handle?.crumb))
  //     // now map them into an array of elements, passing the loader
  //     // data to each one
  //     .map((match) => match.handle.crumb(match.data));
  //   return (
  //     <ol>
  //       {crumbs.map((crumb, index) => (
  //         <li key={index}>{crumb}</li>
  //       ))}
  //     </ol>
  //   );
  // }
};
// export default Breadcrumbs;
