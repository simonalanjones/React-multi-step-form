const FeedbackView = props => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="hidden bg-blue-800 py-4 sm:block">
          <div className="flex items-center justify-center">
            <div className="pr-4">
              <span className="text-center text-lg text-white">
                Leave feedback
              </span>
            </div>
            <div>
              <button
                onClick={props.cancelFeedback}
                type="button"
                className="rounded-lg border border-transparent bg-gray-200/90 py-2 px-4 text-sm font-medium text-gray-800 focus:outline-none hover:bg-gray-100"
              >
                Change
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-grow bg-slate-50 p-8">
          <div className="mx-auto flex w-screen max-w-4xl flex-col">
            <div className="mx-auto min-w-fit border bg-white">
              {props.children}
            </div>
          </div>
        </div>
        {/* // bring in footer! */}
        <div className="h-8 bg-slate-50 text-center">the footer.</div>
      </div>

      {/* <div className="flex flex-grow bg-slate-50 p-8">
        <div className="mx-auto flex w-screen max-w-4xl flex-col">
          <div className="mx-auto min-w-fit border bg-white">
            {props.children}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default FeedbackView;
