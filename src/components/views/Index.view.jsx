const IndexView = ({ teams, forms }) => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="hidden bg-blue-800 py-4 sm:block"></div>

        <h1>INDEX</h1>

        <div className="container mx-auto max-w-6xl ">
          <div className="flex flex-row gap-12 py-4">
            <aside className=" w-full sm:w-1/3 md:w-1/4">
              <div className="top-0 w-full">{teams}</div>
            </aside>
            <main
              role="main"
              className="apx-2 aborder-b w-full pt-1 sm:w-2/3 md:w-3/4"
            >
              {forms}
            </main>
          </div>
        </div>

        <div className="h-8 bg-slate-50 text-center">the footer.</div>
      </div>
    </>
  );
};

export default IndexView;
