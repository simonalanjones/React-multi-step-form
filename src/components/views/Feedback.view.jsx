const FeedbackView = props => {
  return (
    <>
      <div className="flex flex-grow bg-slate-50 p-8">
        <div className="mx-auto flex w-screen max-w-4xl flex-col">
          <div className="mx-auto min-w-fit border bg-white">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackView;
