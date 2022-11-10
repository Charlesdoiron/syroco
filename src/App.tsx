import { Layout } from "components/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Overview } from "pages/overview";
import { Models } from "pages/models";
import { Twins } from "pages/twins";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />}></Route>
          <Route path="/models" element={<Models />}></Route>
          <Route path="/twins" element={<Twins />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
