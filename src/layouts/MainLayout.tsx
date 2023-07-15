import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
