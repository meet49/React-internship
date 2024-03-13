import Home from "./componets/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./componets/Create";
import Read from "./componets/Read";
import Edit from "./componets/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
