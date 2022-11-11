const FormView = ({ progress, wizard }) => {
  return (
    <>
      <div className="w-64 py-12 lg:mr-16">{progress}</div>
      <div className="w-full border bg-white">{wizard}</div>
    </>
  );
};

export default FormView;
