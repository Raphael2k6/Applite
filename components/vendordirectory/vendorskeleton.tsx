import React from "react";

const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

const VendorSkeleton = () => {
  return (
    <div className="h-full w-full rounded-3xl bg-white p-4 shadow-xl flex flex-col justify-between">
      <div className="px-2 sm:px-5 space-y-4">
        <Skeleton className="h-5 w-4/5" />
        <Skeleton className="h-5 w-4/5" />

        <Skeleton className="h-4 w-11/12" />
      </div>

      <Skeleton className="mt-6 h-[101px] w-full rounded-2xl" />
    </div>
  );
};

export default VendorSkeleton;
