const FormView = ({ progress, wizard, onChangeHandler, title }) => {
  return (
    <div className="bg-gray-50">
      {/* background colour across entire page*/}
      <div className="mx-auto flex max-w-6xl flex-row">
        <div className="bg-gray-100">
          <div className="flex h-screen flex-col items-center border-r-2 p-16">
            {progress}
          </div>
        </div>

        <div className="ap-16 max-w-4xl bg-white">
          <p>{wizard}</p>
        </div>
      </div>
    </div>

    // bring in header!
    // <div className="flex h-screen flex-col">
    //   <div className="hidden bg-blue-800 py-4 sm:block">
    //     <div className="flex items-center justify-center">
    //       <div className="pr-4">
    //         <span className="text-center text-lg text-white">{title}</span>
    //       </div>
    //       <div>
    //         <button
    //           onClick={onChangeHandler}
    //           type="button"
    //           className="rounded-lg border border-transparent bg-gray-200/90 py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
    //         >
    //           Change
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex flex-grow bg-slate-50 p-8">
    //     <div className="mx-auto flex w-screen max-w-4xl flex-col">
    //       <div className="flex-grow">
    //         <div className="flex h-full justify-center">
    //           <div className="w-64 py-12 lg:mr-16">{progress}</div>
    //           <div className="w-full border bg-white">{wizard}</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* // bring in footer! */}
    //   <div className="h-8 bg-slate-50 text-center">
    //     the footer. <span onClick={onChangeHandler}>Leave feedback</span>
    //   </div>
    // </div>
  );
};

export default FormView;
