import axahealthlogo from '../../../public/axa-health_logo_solid_rgb.webp';

const FormView = ({ progress, process, onChangeHandler, title }) => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="mx-auto w-full max-w-5xl items-end border-0 pt-4 pb-4 md:flex md:flex-nowrap">
          <div className="px-8">
            <img width="130" src={axahealthlogo} />
          </div>
          <div className="grow px-8">
            <p className="border-0 text-right text-base font-bold uppercase text-blue-800">
              provider management referral forms
            </p>
          </div>
        </div>

        <div className="mx-auto mb-8 w-full max-w-4xl flex-grow  pt-8 md:flex md:flex-nowrap">
          <div className="mx-auto w-fit min-w-fit px-8 pt-4">{progress}</div>

          <div className="flex-grow px-8 pt-8 md:pt-0 md:pr-0">{process}</div>
        </div>
        {/* <div className="bg-slate-50 text-center">BOTTOM NAV</div> */}
      </div>
    </>
  );
};

export default FormView;
