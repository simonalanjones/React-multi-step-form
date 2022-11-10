import { useNavigate } from 'react-router-dom';

const FormList = ({ forms }) => {
  const navigate = useNavigate();

  return (
    forms && (
      <div className="flex flex-col">
        {forms.map((option, index) => (
          <div
            className={`grow px-4 py-4 ${index % 2 ? 'bg-slate-100' : ''}`}
            key={index}
          >
            <div className="flex">
              <div>
                <p className="font-semibold text-slate-600">{option.name}</p>
                <p className="max-w-xl pt-1 text-sm text-slate-500">
                  {option.description}
                </p>
              </div>
              <div className="grow self-center text-right">
                <button
                  onClick={() => navigate(`/form/${option.file}`)}
                  type="button"
                  className="rounded-full border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Use form
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default FormList;
