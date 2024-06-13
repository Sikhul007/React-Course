import AppName from "./components/AppName";
import TodoApp from "./components/TodoApp";
import AppItem1 from "./components/AppIteam1";
import AppItem2 from "./components/AppItem2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <TodoApp></TodoApp>
      <AppItem1></AppItem1>
      <AppItem2 />
    </center>
  );
}

export default App;
