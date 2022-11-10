import { Layout } from "components/layout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Overview } from "pages/overview";
import { Models } from "pages/models";
import { Twins } from "pages/twins";
import { Design } from "pages/design";
import { Scenario } from "pages/scenario";
import { Profile } from "pages/profile";
import { Settings } from "pages/settings";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/scenario" replace />} />
          <Route path="/overview" element={<Overview />}></Route>
          <Route path="/models" element={<Models />}></Route>
          <Route path="/twins" element={<Twins />}></Route>
          <Route path="/design" element={<Design />}></Route>
          <Route path="/scenario" element={<Scenario />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
