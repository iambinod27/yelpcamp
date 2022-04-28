import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/Layout";
import AddCampground from "./pages/AddCampground";
import Auth from "./pages/Auth/Auth";
import CampDetail from "./pages/CampDetail";
import Homepage from "./pages/Homepage";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="addCampground" element={<AddCampground />} />
          <Route path="campDetail/:id" element={<CampDetail />} />
        </Route>

        <Route path="/Login" element={<Auth />} />
        <Route path="/SignUp" element={<Auth />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
        pauseOnHover
      />
    </>
  );
}

export default App;
