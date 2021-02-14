import error from '../../assets/error.png';

import './index.scss';

interface IErrorProps {
  resetErrorBoundary: () => void
}

const Error = ({ resetErrorBoundary }: IErrorProps) => {
  return (
    <div className='error' role='alert'>
      <img className='error__image' src={error} alt='Error' />
      <h2 className='error__text'>
        Ooops, there's been an error, please try again in a few minutes
        <span className='error__highlight' onClick={resetErrorBoundary}>
          Go back to the home page
        </span>
      </h2>
    </div>
  );
};

export default Error;
