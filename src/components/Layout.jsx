import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const isEnglish = location.pathname.startsWith("/en");
    document.documentElement.lang = isEnglish ? "en" : "ko";
  }, [location.pathname]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
