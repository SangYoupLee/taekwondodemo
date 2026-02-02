import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="page">
      <div className="page__inner">
        <div className="card">
          <h2 className="card__title">대회 안내</h2>
          <p className="card__meta">
            김천에서 열리는 국제 태권도 대회로, 국내외 선수와 동호인이 함께
            참가할 수 있는 열린 무대를 목표로 합니다. 정확한 일정과 세부
            규정은 추후 공지될 예정입니다.
          </p>
        </div>

        <div className="card">
          <h3 className="card__title">개요</h3>
          <ul className="card__list">
            <li>종목: 겨루기, 품새 (세부 체급/부문은 공지 예정)</li>
            <li>대상: 초등부 ~ 성인부, 국내외 선수 및 동호인</li>
            <li>장소: 김천시 주요 체육시설 (추후 확정)</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="card__title">예정 일정</h3>
          <ul className="card__list">
            <li>1일차: 참가자 체크인 및 계체</li>
            <li>2일차: 예선 및 본선 경기</li>
            <li>3일차: 결승전 및 시상식</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="card__title">참가 신청</h3>
          <p className="card__meta">
            참가 신청은 개인/팀/단체 모두 가능하도록 준비 중이며, 접수 방식과
            참가비는 공지 이후 안내됩니다.
          </p>
          <Link className="card__cta" to="/apply/form">
            참가 신청하기
          </Link>
        </div>
      </div>
    </section>
  );
}
