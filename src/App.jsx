import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Vista } from "./components/Vista";
import { Vista1 } from "./components/Vista1";
import { Vista3 } from "./components/Vista3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vista />}>
          **<Route index element={<Vista1 />}></Route>
          <Route path="/vista" element={<Vista3 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
