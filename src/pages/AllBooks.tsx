import BookCard from "../components/reuseable/BookCard";

export default function AllBooks() {
  const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="page_main">
      <h2 className="section_title">All Books</h2>
      <div className="flex flex-wrap gap-5 items-center">
        {books.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
}
