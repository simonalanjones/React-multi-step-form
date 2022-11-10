const FeedbackView = props => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="hidden bg-blue-800 py-4 sm:block"></div>

        <div className="flex flex-grow bg-slate-50 p-8">
          <div className="mx-auto flex w-screen max-w-4xl flex-col">
            <div className="mx-auto min-w-fit border bg-white">
              {props.children}
            </div>
          </div>
        </div>

        <div className="h-8 bg-slate-50 text-center">the footer</div>
      </div>
    </>
  );
};

export default FeedbackView;
