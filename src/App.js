import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
