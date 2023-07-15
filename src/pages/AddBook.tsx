import PreviousBtn from "../components/reuseable/PreviousBtn";

export default function AddBook() {
  return (
    <div className="page_main">
      <h2 className="section_title">Add New Book</h2>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 mx-auto">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Paramoy Life"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              placeholder="Jhankar Mahbub"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <select className="select w-full max-w-xs">
              <option disabled selected>
                Pick book genre
              </option>
              <option>Self-Help</option>
              <option>Non-Fiction</option>
              <option>Novel</option>
              <option>Academic</option>
              <option>Sci-Fi</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Publication Date</span>
            </label>
            <input
              type="date"
              placeholder="Jhankar Mahbub"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Book</button>
          </div>
        </div>
      </div>
      <PreviousBtn />
    </div>
  );
}
