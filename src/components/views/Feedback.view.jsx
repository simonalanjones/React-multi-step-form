import axahealthlogo from '../../../public/axa-health_logo_solid_rgb.webp';
import { Link } from 'react-router-dom';
const FeedbackView = (props) => {
  return (
    <div className="flex h-screen flex-col">
      <div className="mx-auto w-full max-w-5xl items-end border-0 pt-4 pb-4 md:flex md:flex-nowrap">
        <div className="px-8">
          <img width="130" src={axahealthlogo} />
        </div>
        <div className="flex grow justify-end gap-x-12 text-base font-bold uppercase">
          <p className="_hover:underline text-blue-800 decoration-blue-800 decoration-0 underline-offset-8 hover:cursor-pointer ">
            <Link to="/">provider management referral forms</Link>
          </p>
          <p className="text-blue-800 underline decoration-blue-800 decoration-0 underline-offset-8">
            feedback
          </p>
        </div>
      </div>
      <div className="mx-auto mb-8 w-full max-w-4xl flex-grow  pt-8 md:flex md:flex-nowrap">
        <div className="flex-grow px-8 pt-8 md:pt-0 md:pr-0">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default FeedbackView;
