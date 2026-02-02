import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import HomeEn from "./pages/HomeEn.jsx";
import About from "./pages/About.jsx";
import AboutEn from "./pages/AboutEn.jsx";
import Apply from "./pages/Apply.jsx";
import ApplyEn from "./pages/ApplyEn.jsx";
import ApplyForm from "./pages/ApplyForm.jsx";
import ApplyFormEn from "./pages/ApplyFormEn.jsx";
import ApplySuccess from "./pages/ApplySuccess.jsx";
import ApplySuccessEn from "./pages/ApplySuccessEn.jsx";
import Admin from "./pages/Admin.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<HomeEn />} />
        <Route path="/about" element={<About />} />
        <Route path="/en/about" element={<AboutEn />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/en/apply" element={<ApplyEn />} />
        <Route path="/apply/form" element={<ApplyForm />} />
        <Route path="/en/apply/form" element={<ApplyFormEn />} />
        <Route path="/apply/success" element={<ApplySuccess />} />
        <Route path="/en/apply/success" element={<ApplySuccessEn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
