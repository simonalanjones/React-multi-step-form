import axalogo from '../../../public/axa-logo.png';

const FormView = ({ progress, wizard, onChangeHandler, title }) => {
  return (
    <>
      <div className="flex h-screen flex-col md:bg-gray-50">
        <div className="flex items-center justify-center border-b border-gray-200 py-4">
          <div>
            <img width="60" height="60" src={axalogo} />
          </div>
        </div>

        <div className="mx-auto w-full max-w-4xl flex-grow pt-8 md:flex md:flex-nowrap">
          <div className="mx-auto w-fit px-8">{progress}</div>
          <div className="flex-grow px-8 pt-8 md:pt-0 md:pr-0">{wizard}</div>
        </div>

        <div className="bg-slate-50 text-center">BOTTOM NAV</div>
      </div>
    </>
  );
};

export default FormView;
