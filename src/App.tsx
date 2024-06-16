import "./App.css";
import useRoutElements from "./hooks/useRoutElements";

function App() {
  const routeElements = useRoutElements();

  return <>{routeElements}</>;
}

export default App;
