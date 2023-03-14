import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const IndexLayout = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex h-screen flex-col">
      <div className="border-b border-slate-100 ">
        <div className="mx-auto w-full max-w-5xl items-center py-4 md:flex md:flex-nowrap">
          <img width="130" src={axahealthlogo} />
          <div className="flex grow justify-end gap-x-12 text-base font-bold uppercase tracking-wide text-blue-800">
            <p>provider management referral forms</p>
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

export default IndexLayout;
