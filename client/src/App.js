import './App.css';
import { Route } from "react-router-dom";
import Inicio from "./components/Inicio"
import Home from "./components/Home"
import Detail from './components/Detail';
import Form from './components/Form';
import SubNavbar from './components/subNavbar';
import About from "./components/about"
import './components/subNavbar.css';
function App() {
  return (
    <div className="App">
      <Route
        path='/'
        render={() => <SubNavbar />}
      />
      <Route
        exact path='/home'
        render={() => <Home />}
      />
      <Route
        exact path='/'
        render={() => <Inicio />}
      />
     <Route
        exact path='/about'
        component={About }
      />
      <Route
        path='/detail'
        render={() => <Detail />}
      />
      <Route
        path='/videogame'
        render={() => <Form />}
      />
    </div>
  );
}

export default App;
