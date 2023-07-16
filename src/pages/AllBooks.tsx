import { useNavigate } from "react-router-dom";
import BookCard from "../components/reuseable/BookCard";
import { useGetAllBooksQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/interface";

export default function AllBooks() {
  const navigate = useNavigate();
  const { data } = useGetAllBooksQuery(undefined);

  return (
    <div className="page_main">
      <h2 className="section_title">All Books</h2>
      <div className="text-center">
        <button
          onClick={() => navigate("/add-book")}
          className="btn btn-primary btn-wide mt-4 mb-6"
        >
          Add New
        </button>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {data?.data?.map((book: IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
}
