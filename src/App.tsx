import './main.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Home from './views/Home';

const App = () => {
  return (
    <Router>
      <Nav />
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;