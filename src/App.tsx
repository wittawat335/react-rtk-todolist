import { useEffect, useState } from "react";
import Todo from "./pages/Todo";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Todo />
    </>
  );
}

export default App;
