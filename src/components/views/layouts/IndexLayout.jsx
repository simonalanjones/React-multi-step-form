import { Outlet } from 'react-router-dom';

const IndexLayout = () => {
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
          the footer. <span onClick={() => giveFeedback()}>Leave feedback</span>
        </div>
      </div>

      {/* <div className="flex h-screen flex-col">
        <div className="hidden bg-blue-800 py-4 sm:block"></div>

        <div className="container mx-auto max-w-6xl ">
          <div className="flex flex-row gap-12 py-4">
            <Outlet />
          </div>
        </div>

        <div className="h-8 bg-slate-50 text-center">the footer.</div>
      </div> */}
    </>
  );
};

export default IndexLayout;
