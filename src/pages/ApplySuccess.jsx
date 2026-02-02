import { Link } from "react-router-dom";

export default function ApplySuccess() {
  return (
    <section className="page">
      <div className="page__inner">
        <div className="card">
          <h2 className="card__title">신청이 접수되었습니다</h2>
          <p className="card__meta">
            입력해주신 정보는 임시 접수로 저장되며, 상세 일정 확정 후 안내
            드리겠습니다.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10 }}>
            <Link to="/" style={{ color: "#2563eb" }}>
              홈으로
            </Link>
            <Link to="/about" style={{ color: "#2563eb" }}>
              대회 정보 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
