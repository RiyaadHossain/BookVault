import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen my-8 md:my-0">
      <div className="card lg:card-side bg-base-200 shadow-xl">
        <figure>
          <img
            className="hidden lg:block w-full h-full object-cover"
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sign Up!</h2>
          <p className="font-light max-w-[300px]">
            Please provide your valid email and a password
          </p>
          <form className="mt-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="card-actions mt-3">
              <button className="btn w-full btn-sm btn-primary">Sign Up</button>
            </div>
          </form>
          <p className="text-sm">
            Already have an account,{" "}
            <span onClick={() => navigate("/")} className="link link-secondary">
              sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
