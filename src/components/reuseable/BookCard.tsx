export default function BookCard({ book }) {
  console.log(book);
  return (
    <div className="card w-80 bg-base-200 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
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
