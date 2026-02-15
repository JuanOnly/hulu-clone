function Skeleton() {
  return (
    <div className="p-2 animate-pulse">
      <div className="bg-gray-700 rounded-lg h-48 w-full mb-2" />
      <div className="bg-gray-700 h-4 w-3/4 mb-2 rounded" />
      <div className="bg-gray-700 h-4 w-1/2 rounded" />
    </div>
  );
}

export function SkeletonGrid() {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  );
}

export default Skeleton;
