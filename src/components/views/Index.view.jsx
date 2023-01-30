import axahealthlogo from '../../../public/axa-health_logo_solid_rgb.webp';
import { Link } from 'react-router-dom';

const IndexView = ({ teams, forms, feedbackLink }) => {
  const heartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
    </svg>
  );

  return (
    <div className=" flex h-screen flex-col">
      <div className="border-b border-slate-100 ">
        <div className="mx-auto w-full max-w-5xl items-center py-4 md:flex md:flex-nowrap">
          <img width="130" src={axahealthlogo} />
          <div className="flex grow justify-end gap-x-12 text-base font-bold uppercase tracking-wide text-blue-800">
            <p>provider management referral forms</p>
            {/* <p className="hover:cursor-pointer">
              <Link to="/feedback">feedback</Link>
            </p> */}
          </div>
        </div>
      </div>
      <div className="flex flex-grow bg-gray-50/90">
        <div className="mx-auto w-full max-w-6xl  pt-8 md:flex md:flex-nowrap">
          <div className="_bg-slate-300 mx-auto w-fit px-8 pt-3">{teams}</div>
          <div className="flex-grow px-8 pt-8 md:pt-0 md:pr-0">{forms}</div>
        </div>
      </div>
      <div className="flex justify-center space-x-3 border-t border-blue-500 bg-blue-600 py-4 text-center text-xs tracking-wide text-blue-100">
        <div>Developed and supported by the Healthnet Team.</div>
        <div>
          We welcome your{' '}
          <span className="underline decoration-blue-300 underline-offset-2 hover:cursor-pointer">
            <Link to="/feedback">feedback</Link>
          </span>
          .
        </div>
      </div>
    </div>
  );
};

export default IndexView;
