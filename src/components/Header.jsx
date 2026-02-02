import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith("/en");

  const homeLink = isEnglish ? "/en" : "/";
  const aboutLink = isEnglish ? "/en/about" : "/about";
  const applyLink = isEnglish ? "/en/apply/form" : "/apply/form";
  const switchLink = isEnglish ? "/" : "/en";

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" to={homeLink}>
          {isEnglish ? "Gimcheon Taekwondo Championship" : "김천 국제 태권도 챔피언십"}
        </Link>

        <nav className="site-header__nav">
          <Link className="site-header__link" to={aboutLink}>
            {isEnglish ? "About" : "대회 안내"}
          </Link>
          <Link className="site-header__cta" to={applyLink}>
            {isEnglish ? "Apply Now" : "참가 신청"}
          </Link>
          <Link className="site-header__lang" to={switchLink}>
            {isEnglish ? "한국어" : "EN"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
