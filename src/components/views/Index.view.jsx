const IndexView = ({ teams, forms }) => {
  return (
    <>
      <aside className="w-full sm:w-1/3 md:w-1/4">
        <div className="top-0 w-full">{teams}</div>
      </aside>
      <main role="main" className="asm:w-2/3 amd:w-3/4 w-full pt-1">
        {forms}
      </main>
    </>
  );
};

export default IndexView;
