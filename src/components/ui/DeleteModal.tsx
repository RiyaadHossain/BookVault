import toast from "react-hot-toast";
import { useDeleteBookMutation } from "../../redux/features/book/bookApi";
import { IBook } from "../../types/interface";
import { useNavigate } from "react-router-dom";

interface IDeleteModalProps {
  book: IBook;
  setShowModal: (value: boolean) => void;
}

export default function DeleteModal({ book, setShowModal }: IDeleteModalProps) {
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();

  const onDeleteBook = () => {
    deleteBook(book._id);
    setShowModal(false);

    toast.success(`Successfully, deleted the book ${book.title}`);
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="modal modal-open flex items-center justify-center">
      <form method="dialog" className="modal-box">
        <button
          onClick={() => setShowModal(false)}
          className="btn btn-sm btn-warning btn-circle absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Warning!</h3>
        <p className="py-4">
          Are you sure you want to delete book:{" "}
          <span className="text-accent font-bold">{book.title}</span> by{" "}
          <span className="text-secondary">{book.author}</span>
        </p>
        <div className="modal-action">
          <button onClick={onDeleteBook} className="btn btn-error">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
