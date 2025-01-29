import Skeleton from 'react-loading-skeleton';
import { LoadingTableRow } from './LoadingTableRow';

export const Loading = () => {
  return (
    <section>
      <article className="flex flex-col">
        <div className="flex  justify-center items-center">
          <span className="w-28 pb-5 pl-4 mr-12">
            <Skeleton height={15} width={80} count={1} className="skeleton" />
          </span>
          <span className="md:w-56 pb-5">
            <Skeleton height={15} width={100} count={1} className="skeleton" />
          </span>
          <span className="min-w-52 pb-5">
            <Skeleton height={15} width={100} count={1} className="skeleton" />
          </span>
          <span className="min-w-16 pb-5 pl-4">
            <Skeleton height={15} width={100} count={1} className="skeleton" />
          </span>
          <span className="min-w-32 pb-5 pl-4">
            <Skeleton height={15} width={100} count={1} className="skeleton" />
          </span>
        </div>
        <div className="flex">
          <hr className="border-[#999ba0] border-1 w-full mb-3" />
        </div>
        <div className="flex justify-center items-center">
          <span className="w-28 pb-5 pl-4 mr-12">
            <Skeleton height={40} width={80} count={1} className="skeleton" />
          </span>
          <span className="md:w-56 pb-5">
            <Skeleton height={20} width={100} count={1} className="skeleton" />
          </span>
          <span className="min-w-52 pb-5">
            <Skeleton height={20} width={100} count={1} className="skeleton" />
          </span>
          <span className="min-w-16 pb-5 pl-4">
            <Skeleton height={20} width={100} count={1} className="skeleton" />
          </span>
          <span className="min-w-32 pb-5 pl-4">
            <Skeleton height={20} width={100} count={1} className="skeleton" />
          </span>
        </div>
        <LoadingTableRow />
        <LoadingTableRow />
        <LoadingTableRow />
        <LoadingTableRow />
        <LoadingTableRow />
        <LoadingTableRow />
        <LoadingTableRow />
        <div className="flex justify-center items-center gap-10">
          <span>
            <Skeleton height={30} width={100} count={1} className="skeleton" />
          </span>
          <span>
            <Skeleton height={10} width={20} count={1} className="skeleton" />
          </span>
          <span>
            <Skeleton height={30} width={100} count={1} className="skeleton" />
          </span>
        </div>
      </article>
    </section>
  );
};
