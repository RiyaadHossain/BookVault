import { FaDeleteLeft, FaPencil } from "react-icons/fa6";

export default function Review() {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-accent">Riyad Hossain</h4>
        <div className="flex items-center gap-2">
          <button
            className="btn btn-sm bg-cyan-700 tooltip"
            data-tip="Update Review"
          >
            <FaPencil />
          </button>
          <button
            className="btn btn-sm bg-red-700 tooltip"
            data-tip="Delete Review"
          >
            <FaDeleteLeft className="" />
          </button>
        </div>
      </div>
      <p className="text-slate-300 mt-2">
        All I want to say about this book is it is really a life changer for all
        those who are struggling with building new habits.
      </p>
    </div>
  );
}
