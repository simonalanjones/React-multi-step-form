import Header from '../Header';
import Footer from '../Footer';

const IndexView = ({ teams, forms }) => {
  return (
    <div className=" flex h-screen flex-col">
      <Header />
      <div className="flex flex-grow bg-gray-50/90">
        <div className="mx-auto w-full max-w-6xl  pt-8 md:flex md:flex-nowrap">
          <div className="mx-auto w-fit px-8 pt-3">{teams}</div>
          <div className="flex-grow px-8 pt-8 md:pt-0 md:pr-0">{forms}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndexView;
