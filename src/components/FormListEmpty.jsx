const FormListEmpty = () => {
  return (
    <div className="mt-2 mb-6 w-full">
      <div className=" text-center md:text-left">
        <p className="text-base font-medium">No forms found</p>
        <p className="py-1 text-sm text-gray-500">
          We didn't find any forms in this section
        </p>
      </div>
    </div>
  );
};

export default FormListEmpty;
