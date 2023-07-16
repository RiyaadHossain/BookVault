import { useNavigate } from "react-router-dom";
import BookCardWithImg from "../reuseable/BookCardWithImg";
import { useGetAllBooksQuery } from "../../redux/features/book/bookApi";
import { IBook } from "../../types/interface";

export default function BookList() {
  const { data } = useGetAllBooksQuery(undefined);
  const navigate = useNavigate();

  return (
    <div className="_section">
      <h2 className="section_title">Recent Books</h2>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {data?.data?.slice(0, 10)?.map((book: IBook) => (
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
