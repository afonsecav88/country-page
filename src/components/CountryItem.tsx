import Skeleton from 'react-loading-skeleton';

export const LoadingCountryDetail = () => {
  return (
    <div className="flex justify-center w-[55vw]">
      <div className="flex flex-col justify-center items-center sm:pb-10 relative top-80">
        <Skeleton
          height={150}
          width={100}
          count={1}
          className="skeleton min-w-64 h-44 rounded-2xl"
        />
        <div className="flex pt-8">
          <Skeleton height={80} width={150} count={1} className="skeleton" />
        </div>
        <div className="inline-flex gap-28 mb-14 pt-8">
          <Skeleton height={40} width={200} count={1} className="skeleton " />
          <Skeleton height={40} width={200} count={1} className="skeleton" />
        </div>
        <div className="inline-flex w-[55vw]  justify-start pl-10 gap-40 sm:justify-between sm:px-6 py-6 items-center">
          <Skeleton height={20} width={100} count={1} className="skeleton" />
          <Skeleton height={20} width={100} count={1} className="skeleton" />
        </div>
        <div className="inline-flex w-[55vw]  justify-start pl-10 gap-40 sm:justify-between sm:px-6 py-6 items-center">
          <Skeleton height={20} width={100} count={1} className="skeleton" />
          <Skeleton height={20} width={100} count={1} className="skeleton" />
        </div>
        <div className="inline-flex w-[55vw]  justify-start pl-10 gap-40 sm:justify-between sm:px-6 py-6 items-center">
          <Skeleton height={20} width={100} count={1} className="skeleton" />
          <Skeleton height={20} width={100} count={1} className="skeleton" />
        </div>
        <div className="inline-flex w-[55vw] justify-start pl-10 gap-40 sm:justify-between sm:px-6 py-6 items-center">
          <Skeleton height={20} width={100} count={1} className="skeleton" />
          <Skeleton height={20} width={100} count={1} className="skeleton" />
        </div>
        <div className="inline-flex w-[55vw]  justify-start pl-10 gap-40 sm:justify-between sm:px-6 py-6 items-center">
          <Skeleton height={20} width={100} count={1} className="skeleton" />
          <Skeleton height={20} width={100} count={1} className="skeleton" />
        </div>
        <div className="flex justify-start gap-6">
          <Skeleton height={80} width={150} count={1} className="skeleton" />
          <Skeleton height={80} width={150} count={1} className="skeleton" />
          <Skeleton height={80} width={150} count={1} className="skeleton" />
        </div>
      </div>
    </div>
  );
};
