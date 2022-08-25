import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sign from "./Pages/Sign/Sign";
import Admin from "./Pages/Admin/Admin";
import Forms from "./Component/FormCreate/Form"
import AddUsers from "./Component/FormCreate/AddUsers";
import EditUsers from"./Component/FormCreate/EditUsers";
import AdminBook from "./Pages/Admin/AdminLivros/AdminLivros"
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalProvider} from ""
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
          <Route exact path="/form" element={<Forms/>} />
          <Route exact path="/edit/:id" element={<EditUsers />} />
          <Route exact path="/add" element={<AddUsers />} />
          <Route exact path="/adminBook" element={< AdminBook/>} />
          
      
        </Routes>
      </Router>

    </div>
  );
}

export default App;
