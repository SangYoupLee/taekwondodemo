import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__inner">
          <div className="home-hero__content">
            <div className="home-hero__brand">
              <img
                className="home-hero__logo"
                src="/kimcheon-logo.png"
                alt="김천시 로고"
              />
              <span>김천시</span>
            </div>
            <h1 className="home-hero__title">
              김천 국제 태권도 챔피언십
            </h1>
            <p className="home-hero__subtitle">
              김천에서 열리는 국제 태권도 대회. 국내외 선수와 동호인이 함께
              참가하는 글로벌 무대로 준비 중입니다.
            </p>
            <div className="home-hero__meta">
              <span>예정 일정: 2026년 상반기 (추후 공지)</span>
              <span>장소: 김천시 주요 체육시설</span>
            </div>

            <div className="home-hero__actions">
              <Link className="home-hero__cta" to="/apply/form">
                참가 신청
              </Link>
              <Link className="home-hero__ghost" to="/about">
                대회 안내
              </Link>
            </div>
          </div>

          <div className="home-hero__panel">
            <span className="home-badge">접수 준비 중</span>
            <h3 className="home-hero__panel-title">대회 요약</h3>
            <ul className="home-hero__panel-list">
              <li>종목: 겨루기, 품새</li>
              <li>대상: 초등부 ~ 성인부</li>
              <li>참가 방식: 개인 / 팀 / 단체</li>
              <li>문의: info@example.com</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="home-main">
        <div className="home-main__inner">
          <div className="home-main__grid">
            <div className="home-main__primary">
              <div className="card card--wide">
                <h3 className="card__title">공지사항</h3>
                <ul className="card__list">
                  <li>대회 일정 및 규정은 추후 공지 예정입니다.</li>
                  <li>해외 참가자 안내 자료는 준비 중입니다.</li>
                  <li>숙박/교통 정보는 개별 공지됩니다.</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="card__title">경기 일정 (예정)</h3>
                <ul className="card__list">
                  <li>1일차: 참가자 체크인 및 계체</li>
                  <li>2일차: 예선 및 본선 경기</li>
                  <li>3일차: 결승전 및 시상식</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="card__title">참가 종목</h3>
                <p className="card__meta">
                  세부 체급 및 부문은 공지 이후 신청 시 선택할 수 있습니다.
                </p>
                <ul className="card__list">
                  <li>겨루기: 개인전 / 단체전</li>
                  <li>품새: 개인전 / 단체전</li>
                  <li>시범/특별경기: 협의 예정</li>
                </ul>
              </div>
            </div>

            <aside className="home-main__side">
              <div className="card">
                <h3 className="card__title">참가 신청</h3>
                <p className="card__meta">
                  현재는 예비 접수 단계입니다. 기본 정보를 남겨주시면 상세
                  일정 공지 시 안내드리겠습니다.
                </p>
                <Link className="card__cta" to="/apply/form">
                  신청서 작성하기
                </Link>
              </div>

              <div className="card">
                <h3 className="card__title">문의</h3>
                <ul className="card__list">
                  <li>이메일: info@example.com</li>
                  <li>전화: +82-00-0000-0000</li>
                  <li>운영시간: 평일 10:00 - 18:00</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
