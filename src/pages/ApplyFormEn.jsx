import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ApplyForm.css";
import { submitApplication } from "../lib/formSubmit.js";

export default function ApplyFormEn() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      await submitApplication({
        ...payload,
        locale: "en",
        submittedAt: new Date().toISOString(),
      });
      navigate("/en/apply/success");
    } catch (error) {
      const message = error?.message || "";
      if (message === "FORM_ENDPOINT_MISSING") {
        alert("Please configure the Google Script endpoint first.");
      } else if (message === "UNAUTHORIZED") {
        alert("Unauthorized. Please check the admin token.");
      } else if (message === "DUPLICATE") {
        alert("A submission already exists for this applicant.");
      } else {
        alert("Submission failed. Please try again.");
      }
      setStatus("idle");
    }
  };

  return (
    <section className="page apply-form" lang="en">
      <div className="page__inner apply-form__inner">
        <div className="apply-form__header">
          <h2>Application Form</h2>
          <p>
            This is a pre-registration form. Additional documents may be
            required once the schedule and rules are confirmed.
          </p>
        </div>

        <form className="card apply-form__card" onSubmit={handleSubmit}>
          <div className="apply-form__grid">
            <label className="apply-form__field">
              <span>Name</span>
              <input type="text" name="name" required placeholder="Jane Doe" />
            </label>

            <label className="apply-form__field">
              <span>Date of Birth</span>
              <input type="date" name="birthdate" required lang="en" />
            </label>

            <label className="apply-form__field">
              <span>Gender</span>
              <select name="gender" required>
                <option value="">Select</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label className="apply-form__field">
              <span>Nationality</span>
              <input type="text" name="nationality" required placeholder="Korea" />
            </label>

            <label className="apply-form__field">
              <span>Division</span>
              <select name="division" required>
                <option value="">Select</option>
                <option value="sparring">Sparring</option>
                <option value="poomsae">Poomsae</option>
                <option value="both">Sparring + Poomsae</option>
              </select>
            </label>

            <label className="apply-form__field">
              <span>Weight Class</span>
              <select name="weightClass" required>
                <option value="">Select</option>
                <option value="fly">Fly</option>
                <option value="light">Light</option>
                <option value="middle">Middle</option>
                <option value="heavy">Heavy</option>
              </select>
            </label>

            <label className="apply-form__field">
              <span>Team / Dojang</span>
              <input type="text" name="team" placeholder="Gimcheon TKD" />
            </label>

            <label className="apply-form__field">
              <span>Coach</span>
              <input type="text" name="coach" placeholder="Coach Lee" />
            </label>

            <label className="apply-form__field">
              <span>Email</span>
              <input type="email" name="email" required placeholder="name@email.com" />
            </label>

            <label className="apply-form__field">
              <span>Phone</span>
              <input type="tel" name="phone" required placeholder="+82-00-0000-0000" />
            </label>

            <label className="apply-form__field">
              <span>Emergency Contact</span>
              <input type="tel" name="emergency" placeholder="+82-00-0000-0000" />
            </label>

            <fieldset className="apply-form__field apply-form__radio">
              <legend>Accommodation Support</legend>
              <label>
                <input type="radio" name="stay" value="yes" required />
                Need assistance
              </label>
              <label>
                <input type="radio" name="stay" value="no" />
                Not needed
              </label>
            </fieldset>

            <label className="apply-form__field apply-form__full">
              <span>Additional Notes</span>
              <textarea name="notes" rows="4" placeholder="Leave any special requests." />
            </label>

            <label className="apply-form__checkbox apply-form__full">
              <input type="checkbox" required />
              I agree to the collection and use of personal information.
            </label>
          </div>

          <div className="apply-form__actions">
            <button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Submitting..." : "Submit"}
            </button>
            <span className="apply-form__hint">
              You will be redirected to the confirmation page.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
