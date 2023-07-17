import PreviousBtn from "../reuseable/PreviousBtn";
import Review from "./Review";

export default function Reviews() {
  return (
    <div>
      <h4 className="text-lg font-semibold">User Reviews:</h4>
      <div className="bg-neutral h-[0.5px]" />
      <div className="mt-3">
        <div className="flex gap-3 items-end">
          <textarea
            className="resize-none textarea textarea-primary w-[400px]"
            placeholder="This book is ....."
            rows={4}
          ></textarea>{" "}
          <button className="btn btn-sm btn-primary">Submit</button>
        </div>
        <Review />
        <Review />
        <Review />
        <PreviousBtn />
      </div>
    </div>
  );
}
