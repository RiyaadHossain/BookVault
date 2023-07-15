import Reviews from "../components/ui/Reviews";

export default function BookDetails() {
  return (
    <div className="page_main">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="">
          <img
            className="h-80 rounded-sm"
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1198&q=80"
            alt=""
          />
        </div>
        <div>
          <div className="flex items-end justify-between">
            <h4 className="text-xl text-secondary font-semibold">
              Automic Habits{" "}
              <span className="text-sm text-slate-500 font-medium">
                by James Clear
              </span>
            </h4>
            <p className="text-sm">22 March 2003</p>
          </div>
          <span className="badge badge-info">Self-Help</span>
        </div>
        <Reviews />
      </div>
    </div>
  );
}
