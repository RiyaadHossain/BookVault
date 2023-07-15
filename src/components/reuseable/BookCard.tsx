import { useNavigate } from "react-router-dom";

export default function BookCard({ book }: { book: number }) {
  const navigate = useNavigate();
  console.log(book);

  return (
    <div
      onClick={() => navigate("/book-details")}
      className="card w-80 bg-base-200 shadow-xl hover:-translate-y-2 transition-transform"
    >
      <figure>
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1198&q=80"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-sm badge-secondary">NEW</div>
        </h2>
        <p className="font-light">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-sm badge-outline">Fashion</div>
          <div className="badge badge-sm badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}
