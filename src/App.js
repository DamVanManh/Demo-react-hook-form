import "./App.css";
import TodoForm from "./features/TodoForm/index";
function App() {
  const handleTodoFormSubmit = (values) => {
    console.log("form submit:", values);
  };
  return (
    <div className="App">
      <h3>Demo React-hook-form</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
}
export default App;
