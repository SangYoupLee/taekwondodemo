import { Link } from "react-router-dom";

export default function Apply() {
  const GOOGLE_FORM_URL = "https://forms.gle/xxxxxxxxxxxxxxxxx";

  return (
    <section className="page">
      <div className="page__inner">
        <div className="card">
          <h2 className="card__title">참가 신청</h2>
          <p className="card__meta">
            참가 신청은 자체 폼 또는 구글폼 중에서 선택할 수 있습니다. 현재
            구글폼 링크는 준비 중이며, 먼저 자체 신청폼으로 접수 가능합니다.
          </p>
        </div>

        <div className="card">
          <h3 className="card__title">신청 방법</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="card__cta" to="/apply/form">
              자체 신청폼
            </Link>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="card__cta"
              style={{ background: "#2563eb", opacity: 0.7 }}
            >
              구글폼 (준비중)
            </a>

            <Link
              to="/apply/success"
              className="card__cta"
              style={{ background: "#e11d48" }}
            >
              제출 완료 확인
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
