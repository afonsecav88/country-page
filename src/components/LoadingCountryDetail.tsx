import Skeleton from 'react-loading-skeleton';

export const LoadingCountryDetail = () => {
  return (
    <div
      className="grid grid-flow-col grid-rows-[20vw_minmax(20rem,auto)] md:grid-rows-[4vw_minmax(auto,auto)] gap-5  sm:pt-6 bg-[#1C1D1F] text-[#D2D5DA] w-full md:w-[70vw] lg-w-[56.5vw] max-w-[45rem] h-auto min-h-[90vh] absolute top-52 rounded-lg
  border-[#282B30] border pb-8">
      <div className="flex flex-col justify-center items-center sm:pb-10 relative top-[22rem]">
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
