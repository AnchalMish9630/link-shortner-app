import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Account from "./component/Account";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/account" element={<Account/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
