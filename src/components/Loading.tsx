import LoadingSpinningImage from '../assets/loading-spinning-circles.svg';

export const Loading = () => {
  return (
    <div className="flex justify-center">
      <img className="w-16" src={LoadingSpinningImage} alt="loading" />
    </div>
  );
};
