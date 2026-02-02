import { Link } from "react-router-dom";

export default function AboutEn() {
  return (
    <section className="page">
      <div className="page__inner">
        <div className="card">
          <h2 className="card__title">About the Event</h2>
          <p className="card__meta">
            The Gimcheon International Taekwondo Championship welcomes athletes
            and enthusiasts from Korea and abroad. Detailed dates and rules will
            be announced soon.
          </p>
        </div>

        <div className="card">
          <h3 className="card__title">Overview</h3>
          <ul className="card__list">
            <li>Divisions: Sparring, Poomsae (classes TBA)</li>
            <li>Eligible: Youth to Adult, domestic and international</li>
            <li>Venue: Gimcheon sports facilities (TBA)</li>
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
          <h3 className="card__title">Registration</h3>
          <p className="card__meta">
            Registration will be open for individuals, teams, and groups. Fees
            and submission methods will be announced.
          </p>
          <Link className="card__cta" to="/en/apply/form">
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
