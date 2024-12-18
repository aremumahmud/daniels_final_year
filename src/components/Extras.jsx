import { FaCircleInfo } from "react-icons/fa6";
const BoxTitle = (e) => {
  return (
    <div className="flex justify-between items-center mb-2 font-bold">
      <h3 className="flex items-center gap-1">
        {e.title}
        <i className="text-green-200">
          <FaCircleInfo />
        </i>
      </h3>

      <button className="p-2 rounded-md border-2 text-xs">{e.button}</button>
    </div>
  );
};
const Num = (e) => {
  return (
    <div className="flex gap-2 items-center mb-2">
      <i className="text-xs border p-1 my-color">{e.icon}</i>
      <h2 className="text-2xl font-bold">{e.num}</h2>
      <button className="bg-green-100 text-green-950 text-xs px-2 py-1 rounded-xl">
        {e.rate}
      </button>
    </div>
  );
};

export { BoxTitle, Num };
