const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-current rounded-full";

  return (
    <div className="flex justify-center items-center m-4 p-4">
      <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-red-400 via-blue-500 to-green-400 ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
      </div>
      <h1 className="mx-3">LOADING...</h1>
    </div>
  );
};

export default Loader;
