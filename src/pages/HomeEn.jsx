import { Link } from "react-router-dom";
import "./Home.css";

export default function HomeEn() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__inner">
          <div className="home-hero__content">
            <div className="home-hero__brand">
              <img
                className="home-hero__logo"
                src="/kimcheon-logo.png"
                alt="Gimcheon City Logo"
              />
              <span>Gimcheon City</span>
            </div>
            <h1 className="home-hero__title">
              Gimcheon International Taekwondo Championship
            </h1>
            <p className="home-hero__subtitle">
              An upcoming global stage in Gimcheon where athletes and enthusiasts
              compete together. Details will be announced soon.
            </p>
            <div className="home-hero__meta">
              <span>Planned dates: First half of 2026 (TBA)</span>
              <span>Venue: Gimcheon sports facilities</span>
            </div>

            <div className="home-hero__actions">
              <Link className="home-hero__cta" to="/en/apply/form">
                Apply Now
              </Link>
              <Link className="home-hero__ghost" to="/en/about">
                About the Event
              </Link>
            </div>
          </div>

          <div className="home-hero__panel">
            <span className="home-badge">Registration opens soon</span>
            <h3 className="home-hero__panel-title">Event Snapshot</h3>
            <ul className="home-hero__panel-list">
              <li>Divisions: Sparring, Poomsae</li>
              <li>Eligible: Youth to Adult</li>
              <li>Entry: Individual / Team / Group</li>
              <li>Contact: info@example.com</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="home-main">
        <div className="home-main__inner">
          <div className="home-main__grid">
            <div className="home-main__primary">
              <div className="card card--wide">
                <h3 className="card__title">Notices</h3>
                <ul className="card__list">
                  <li>Schedule and rules will be announced soon.</li>
                  <li>International participant guidance is in preparation.</li>
                  <li>Accommodation and transport details will follow.</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="card__title">Tentative Schedule</h3>
                <ul className="card__list">
                  <li>Day 1: Check-in and weigh-in</li>
                  <li>Day 2: Preliminary and main rounds</li>
                  <li>Day 3: Finals and awards</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="card__title">Divisions</h3>
                <p className="card__meta">
                  Weight classes and categories will be available during
                  registration.
                </p>
                <ul className="card__list">
                  <li>Sparring: Individual / Team</li>
                  <li>Poomsae: Individual / Team</li>
                  <li>Showcase/Exhibition: To be announced</li>
                </ul>
              </div>
            </div>

            <aside className="home-main__side">
              <div className="card">
                <h3 className="card__title">Registration</h3>
                <p className="card__meta">
                  This is a pre-registration. Leave your basic information and
                  we will notify you once details are confirmed.
                </p>
                <Link className="card__cta" to="/en/apply/form">
                  Open Application
                </Link>
              </div>

              <div className="card">
                <h3 className="card__title">Contact</h3>
                <ul className="card__list">
                  <li>Email: info@example.com</li>
                  <li>Phone: +82-00-0000-0000</li>
                  <li>Hours: Weekdays 10:00 - 18:00</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
