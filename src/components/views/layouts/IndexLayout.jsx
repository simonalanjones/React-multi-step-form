import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const IndexLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="hidden bg-blue-800 py-4 sm:block"></div>

        <div className="flex flex-grow bg-slate-50 p-8">
          <div className="mx-auto flex w-screen max-w-4xl flex-col">
            <div className="flex-grow">
              <div className="flex h-full justify-center">
                <Outlet />
              </div>
            </div>
          </div>
        </div>

        <div className="h-8 bg-slate-50 text-center">
          the footer.{' '}
          <span onClick={() => navigate('/feedback')}>Leave feedback</span>
        </div>
      </div>
    </>
  );
};

export default IndexLayout;
