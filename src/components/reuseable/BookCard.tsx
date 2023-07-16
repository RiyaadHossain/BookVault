import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaDeleteLeft, FaPencil } from "react-icons/fa6";
import { IBook } from "../../types/interface";
import { useAppSelector } from "../../redux/hook";
import DeleteModal from "../ui/DeleteModal";

export default function BookCard({ book }: { book: IBook }) {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="card w-80 bg-base-200 shadow-xl hover:-translate-y-2 transition-transform">
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <div className="badge badge-sm badge-secondary">{book.author}</div>
          <p className="font-light">
            <span className="font-semibold">Publication Date:</span>{" "}
            {book.publicationDate}
          </p>
          {book.addedBy === user.email && (
            <div className="card-actions justify-between items-center">
              <div className="badge badge-sm badge-outline">{book.genre}</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate(`/update-book/${book._id}`)}
                  className="btn btn-sm bg-cyan-700 tooltip"
                  data-tip="Update Book"
                >
                  <FaPencil />
                </button>
                <button
                  onClick={() => setShowModal(!showModal)}
                  className="btn btn-sm bg-red-700 tooltip"
                  data-tip="Delete Book"
                >
                  <FaDeleteLeft className="" />
                </button>
              </div>
            </div>
          )}
          <div>
            <button
              onClick={() => navigate(`/book-details/${book._id}`)}
              className="btn btn-block btn-outline btn-secondary"
            >
              See Detail
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <DeleteModal book={book} setShowModal={setShowModal} />
      )}
    </>
  );
}
