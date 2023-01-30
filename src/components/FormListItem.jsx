const FormListItem = ({ name, description, url }) => {
  return (
    <div className="flex flex-col rounded-md border border-slate-200/80 bg-white px-6 py-4 shadow-sm">
      <div className="flex flex-row flex-wrap gap-x-6 lg:flex-nowrap ">
        <div className="w-full text-center md:text-left">
          <span
            onClick={url}
            className="text-base font-bold text-gray-600 hover:cursor-pointer hover:text-gray-500/80 hover:underline hover:decoration-gray-400/80 hover:decoration-2 hover:underline-offset-4"
          >
            {name}
          </span>
          <p className="py-2 text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FormListItem;
