import Header from '../Header';
import Breadcrumbs from '../Breadcrumbs';

const FormView = ({ progress, process, title, team }) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <Breadcrumbs title={title} teamUrl={team.urlName} teamName={team.name} />
      <div className="flex grow bg-gray-50/90">
        <div className="mx-auto mb-8 w-full max-w-5xl flex-grow  pt-8 md:flex md:flex-nowrap">
          <div className="mx-auto w-fit min-w-fit px-8 pt-4">{progress}</div>
          <div className="flex-grow px-8 pt-8 md:pt-0 md:pr-0">{process}</div>
        </div>
      </div>
    </div>
  );
};

export default FormView;
