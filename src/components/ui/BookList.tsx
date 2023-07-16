import { useNavigate } from "react-router-dom";
import BookCardWithImg from "../reuseable/BookCardWithImg";

export default function BookList() {
  const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const navigate = useNavigate();

  return (
    <div className="_section">
      <h2 className="section_title">Recent Books</h2>
      <div className="flex flex-wrap gap-5 items-center">
        {books.map((book) => (
          <BookCardWithImg book={book} />
        ))}
      </div>
      <div className="text-center mt-5">
        <button
          onClick={() => navigate("/all-books")}
          className="btn btn-secondary"
        >
          View All Books
        </button>
      </div>
    </div>
  );
}
