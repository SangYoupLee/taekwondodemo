import { Link } from "react-router-dom";

export default function ApplyEn() {
  const GOOGLE_FORM_URL = "https://forms.gle/xxxxxxxxxxxxxxxxx";

  return (
    <section className="page">
      <div className="page__inner">
        <div className="card">
          <h2 className="card__title">Application</h2>
          <p className="card__meta">
            You can apply via our internal form or Google Form. The Google Form
            link is not ready yet, so please use the internal form for now.
          </p>
        </div>

        <div className="card">
          <h3 className="card__title">How to Apply</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="card__cta" to="/en/apply/form">
              Internal Form
            </Link>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="card__cta"
              style={{ background: "#2563eb", opacity: 0.7 }}
            >
              Google Form (TBA)
            </a>

            <Link
              to="/en/apply/success"
              className="card__cta"
              style={{ background: "#e11d48" }}
            >
              View Submission Status
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
