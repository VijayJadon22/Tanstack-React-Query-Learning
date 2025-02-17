import { useQuery } from "@tanstack/react-query"
import './App.css';
import Form from "./components/Form";

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['todo'],
    queryFn: () => fetch("http://localhost:8000/todo")
      .then((res) => res.json()),
  });

  console.log("Data", data);
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
