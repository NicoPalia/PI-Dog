import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cards from "./Components/Cards";
import Detail from "./Components/Detail";
import Create from "./Components/Create";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Route exact path="/dogs" component={() => <NavBar />} />
      <Switch>
        <Route exact path="/dogs" component={() => <Cards />} />
        <Route exact path="/dogs/:id" component={() => <Detail />} />
        <Route exact path="/create" component={() => <Create />} />
      </Switch>
    </div>
  );
}

export default App;
