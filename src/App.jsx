import { Route, Routes, HashRouter } from "react-router-dom";
import { Vista } from "./components/Vista";
import { Vista1 } from "./components/Vista1";
import { Vista3 } from "./components/Vista3";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Vista />}>
          **<Route index element={<Vista1 />}></Route>
          <Route path="/vista" element={<Vista3 />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
