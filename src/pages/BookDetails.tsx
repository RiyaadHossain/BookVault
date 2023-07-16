import { useParams } from "react-router-dom";
import Reviews from "../components/ui/Reviews";
import { useGetBookQuery } from "../redux/features/book/bookApi";

export default function BookDetails() {
  const { id } = useParams();
  const { data: book } = useGetBookQuery(id!);

  return (
    <div className="page_main">
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <div className="">
          <img
            className="h-80 rounded-sm"
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1198&q=80"
            alt=""
          />
        </div>
        <div>
          <h4 className="text-xl text-secondary font-semibold">
            {book?.title}{" "}
            <span className="text-sm text-slate-500 font-medium">
              by {book?.author}
            </span>
          </h4>
          <span className="badge badge-info">{book?.genre}</span>
          <p className="text-sm my-2">
            <span className="font-semibold">Publication Date: </span>
            {book?.publicationDate}
          </p>
        </div>
      </div>
      <Reviews />
    </div>
  );
}
