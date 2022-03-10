import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Employee from "./pages/employee-list";
import Error from "./pages/error";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/employee-list" exact element={<Employee />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
