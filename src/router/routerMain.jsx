import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  );
};

export default RouterMain;
