import Cabecera from "./components/Cabecera";
import "bootstrap/dist/css/bootstrap.css";
//Scaloni mete cambio
//import TodoList from "./components/TodoList";
import TodoList from "./containers/TodoList";
import theOnlySourceOfTruth from "./store/store";
import { Provider } from "react-redux";
import TodoForm from "./containers/TodoForm";

/*const tareas = [
  { id: 1, nombre: "Leer los mail", done: false },
  { id: 2, nombre: "Practicar mucho react", done: false },
  { id: 3, nombre: "Ver el video de facebook", done: false },
  { id: 4, nombre: "Aprender Typescript", done: false }
];*/

function App() {
  return (
    <Provider store={theOnlySourceOfTruth}>
      <Cabecera />
      <main className="container w-50">
        <TodoList />
        <TodoForm />
      </main>
    </Provider>
  );
}

export default App;
