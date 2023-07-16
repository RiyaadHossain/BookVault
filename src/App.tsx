import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { useAppDispatch } from "./redux/hook";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { auth } from "./lib/firebase";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user?.email));
    });
    dispatch(setLoading(false));
  }, [dispatch]);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
