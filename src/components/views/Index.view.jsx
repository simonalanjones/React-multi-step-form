const IndexView = ({ teams, forms, feedbackLink }) => {
  console.log('in indexview');
  return (
    <>
      <div className="abg-slate-50 container flex h-screen flex-col">
        <div className="bg-slate-50 text-center">TOP NAV</div>

        <div className="abg-green-500 mx-auto max-w-5xl flex-grow md:flex">
          <div className="aborder abg-slate-100 p-4 pt-8">{teams}</div>

          <div className="abg-slate-700 p-4">{forms}</div>
        </div>
        <div className="bg-slate-50 text-center">BOTTOM NAV</div>
      </div>
    </>
  );
};

export default IndexView;
