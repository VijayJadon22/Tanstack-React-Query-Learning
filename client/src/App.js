import { useQuery } from "@tanstack/react-query"
import './App.css';
import Form from "./components/Form";

function App() {
  const { data, error, isLoading, status } = useQuery({
    queryKey: ['todo'],
    queryFn: () => fetch("http://localhost:8000/todo")
      .then((res) => res.json()),
  });

  console.log("Data", data);

  if (error) return <h1>Something went wrong...</h1>
  if (isLoading) return <h1>Loading...</h1>
  return (
    <div className="App">
      {<p>Status:{status}</p>}
      <Form />
      {data && data.data && data.data.map((todo) => (
        <div key={todo.id}>
          <h3 style={{ display: "inline-block" }} >{todo.title} ---</h3>
          <span>Iscompleted: {todo.isCompleted.toString()}  </span>
        </div>
      ))}
    </div>
  );
}

export default App;
