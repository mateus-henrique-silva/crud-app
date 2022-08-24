import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sign from "./Pages/Sign/Sign";
import Admin from "./Pages/Admin/Admin";
import Form from "./Component/FormCreate/Form"
const Private = ({ Item }) => {
  const { signed } = true;

  return signed > 0 ? <Item /> : <Sign />;
};
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/admin" element={<Admin />} />
          <Route exact element={<Sign />} path="/" />
          <Route exact path="/form" element={<Form/>} />
          <AddUsers />
      <EditUsers />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
