import { Link } from "react-router-dom";

export default function ApplySuccessEn() {
  return (
    <section className="page">
      <div className="page__inner">
        <div className="card">
          <h2 className="card__title">Application submitted</h2>
          <p className="card__meta">
            Your information has been saved as a preliminary application. We
            will contact you once the schedule is confirmed.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10 }}>
            <Link to="/en" style={{ color: "#2563eb" }}>
              Go Home
            </Link>
            <Link to="/en/about" style={{ color: "#2563eb" }}>
              View Event Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
