import axahealthlogo from '../../../public/axa-health_logo_solid_rgb.webp';
import { Link } from 'react-router-dom';

const Chevron = () => (
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

const Breadcrumbs = ({ title, teamUrl, teamName }) => (
  <div className="border-b border-slate-200">
    <div className="_bg-gray-50 _px-8 mx-auto flex h-16 w-full max-w-5xl place-content-start items-center  pt-4 pb-4">
      <span className="py-1 text-sm font-bold uppercase text-blue-800 decoration-2 underline-offset-8 hover:cursor-pointer hover:underline">
        <Link to="/">HOME</Link>
      </span>

      <span className="px-2 text-sm font-bold text-blue-800">
        <Chevron />
      </span>
      <span className="text-sm font-bold uppercase text-blue-800">
        <Link to={`/team/${teamUrl}`}>{teamName}</Link>
      </span>
      <span className="px-2 font-bold text-blue-800">
        <Chevron />
      </span>
      <p className="text-sm font-bold uppercase text-gray-600">{title}</p>
    </div>
  </div>
);

const FormView = ({ progress, process, title, team }) => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="border-b border-slate-100">
          <div className="mx-auto w-full max-w-5xl items-center  py-4 md:flex md:flex-nowrap">
            <img width="130" src={axahealthlogo} />
            <div className="flex grow justify-end gap-x-12  text-base font-bold uppercase tracking-wide text-blue-800">
              <p>provider management referral forms</p>
              {/* <p className="hover:cursor-pointer">
                <Link to="/feedback">feedback</Link>
              </p> */}
            </div>
          </div>
        </div>

        <Breadcrumbs
          title={title}
          teamUrl={team.urlName}
          teamName={team.name}
        />

        <div className="flex grow bg-gray-50/90">
          <div className="mx-auto mb-8 w-full max-w-5xl flex-grow  pt-8 md:flex md:flex-nowrap">
            <div className="mx-auto w-fit min-w-fit px-8 pt-4">{progress}</div>
            <div className="flex-grow px-8 pt-8 md:pt-0 md:pr-0">{process}</div>
          </div>
        </div>
        {/* <div className="bg-slate-50 text-center">BOTTOM NAV</div> */}
      </div>
    </>
  );
};

export default FormView;
