import BookCard from "../reuseable/BookCard";

export default function BookList() {
  const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="_section">
      <h2 className="section_title">Recent Books</h2>
      <div className="flex flex-wrap gap-5 items-center">
        {books.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
}
