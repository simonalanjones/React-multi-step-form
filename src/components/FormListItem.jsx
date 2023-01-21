const FormListItem = ({ name, description, url }) => {
  return (
    <div className="mt-2 mb-6 flex flex-col lg:gap-y-5">
      <div className="flex flex-row flex-wrap gap-x-6 lg:flex-nowrap">
        <div className="w-full text-center md:text-left">
          <p className="text-lg font-medium">{name}</p>
          <p className="py-1 text-sm text-gray-500">{description}</p>
        </div>

        <div className="mx-auto sm:mt-3 sm:mb-3 sm:min-w-max md:mx-0 lg:mt-1">
          <button
            onClick={url}
            className="rounded-lg 
            border border-gray-200 
            bg-white py-2.5 px-5 text-sm font-medium 
            text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 
            hover:bg-gray-100 hover:text-blue-700 
            "
          >
            Use form
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormListItem;
