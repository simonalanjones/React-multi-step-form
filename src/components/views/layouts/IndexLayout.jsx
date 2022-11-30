import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const IndexLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="bg-blue-800 py-4 text-white sm:block">Header</div>

        <div className="flex flex-grow bg-slate-50 p-8">
          <div className="mx-auto flex w-screen max-w-4xl">
            <div className="flex-grow">
              <div className="flex justify-center overflow-hidden">
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
