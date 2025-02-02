import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

export const LoadingTableRow: FC = () => {
  return (
    <div className="flex justify-center items-center">
      <span className="w-28 pb-5 pl-4 mr-12">
        <Skeleton height={40} width={80} count={1} className="skeleton" />
      </span>
      <span className="md:w-56 pb-5">
        <Skeleton height={20} width={100} count={1} className="skeleton" />
      </span>
      <span className="min-w-32 pb-5">
        <Skeleton height={20} width={100} count={1} className="skeleton" />
      </span>
      <span className="min-w-16 pb-5 pl-4">
        <Skeleton height={20} width={100} count={1} className="skeleton" />
      </span>
      <span className="min-w-32 pb-5 pl-6">
        <Skeleton height={20} width={100} count={1} className="skeleton" />
      </span>
    </div>
  );
};
