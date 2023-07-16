// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaDeleteLeft, FaPencil } from "react-icons/fa6";

export default function BookCard({ book }: { book: number }) {
  const navigate = useNavigate();
  console.log(book);

  // const [showModal, setShowModal] = useState(false);
  // console.log(showModal);
  return (
    <div className="card w-80 bg-base-200 shadow-xl hover:-translate-y-2 transition-transform">
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-sm badge-secondary">NEW</div>
        </h2>
        <p className="font-light">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-between items-center">
          <div className="badge badge-sm badge-outline">Fashion</div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/update-book")}
              className="btn btn-sm bg-cyan-700 tooltip"
              data-tip="Update Book"
            >
              <FaPencil />
            </button>
            <button
              // onClick={() => setShowModal(!showModal)}
              className="btn btn-sm bg-red-700 tooltip"
              data-tip="Delete Book"
            >
              <FaDeleteLeft className="" />
            </button>
          </div>
        </div>
        <div>
          <button
            onClick={() => navigate("/book-details")}
            className="btn btn-block btn-secondary"
          >
            See Detail
          </button>
        </div>
      </div>
      {/* {showModal && <DeleteModal setShowModal={setShowModal} />} */}
    </div>
  );
}
