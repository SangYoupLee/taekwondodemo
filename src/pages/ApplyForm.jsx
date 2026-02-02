import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ApplyForm.css";
import { submitApplication } from "../lib/formSubmit.js";

export default function ApplyForm() {
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
        locale: "ko",
        submittedAt: new Date().toISOString(),
      });
      navigate("/apply/success");
    } catch (error) {
      const message = error?.message || "";
      if (message === "FORM_ENDPOINT_MISSING") {
        alert("구글 스크립트 연동이 필요합니다. 설정 후 다시 시도해주세요.");
      } else if (message === "UNAUTHORIZED") {
        alert("접근 권한이 없습니다. 관리자 토큰을 확인해주세요.");
      } else if (message === "DUPLICATE") {
        alert("이미 제출된 정보입니다. 확인 후 다시 시도해주세요.");
      } else {
        alert("제출에 실패했습니다. 잠시 후 다시 시도해주세요.");
      }
      setStatus("idle");
    }
  };

  return (
    <section className="page apply-form">
      <div className="page__inner apply-form__inner">
        <div className="apply-form__header">
          <h2>참가 신청서</h2>
          <p>
            아래 정보는 예비 접수용입니다. 상세 일정 및 규정 확정 후,
            추가 서류가 필요할 수 있습니다.
          </p>
        </div>

        <form className="card apply-form__card" onSubmit={handleSubmit}>
          <div className="apply-form__grid">
            <label className="apply-form__field">
              <span>이름</span>
              <input type="text" name="name" required placeholder="홍길동" />
            </label>

            <label className="apply-form__field">
              <span>생년월일</span>
              <input type="date" name="birthdate" required />
            </label>

            <label className="apply-form__field">
              <span>성별</span>
              <select name="gender" required>
                <option value="">선택</option>
                <option value="female">여성</option>
                <option value="male">남성</option>
                <option value="other">기타</option>
              </select>
            </label>

            <label className="apply-form__field">
              <span>국적</span>
              <input type="text" name="nationality" required placeholder="대한민국" />
            </label>

            <label className="apply-form__field">
              <span>참가 종목</span>
              <select name="division" required>
                <option value="">선택</option>
                <option value="sparring">겨루기</option>
                <option value="poomsae">품새</option>
                <option value="both">겨루기 + 품새</option>
              </select>
            </label>

            <label className="apply-form__field">
              <span>체급/부문</span>
              <select name="weightClass" required>
                <option value="">선택</option>
                <option value="fly">플라이급</option>
                <option value="light">라이트급</option>
                <option value="middle">미들급</option>
                <option value="heavy">헤비급</option>
              </select>
            </label>

            <label className="apply-form__field">
              <span>소속 (도장/팀)</span>
              <input type="text" name="team" placeholder="예: 김천 태권도" />
            </label>

            <label className="apply-form__field">
              <span>담당 코치</span>
              <input type="text" name="coach" placeholder="예: 이 코치" />
            </label>

            <label className="apply-form__field">
              <span>이메일</span>
              <input type="email" name="email" required placeholder="name@email.com" />
            </label>

            <label className="apply-form__field">
              <span>연락처</span>
              <input type="tel" name="phone" required placeholder="+82-00-0000-0000" />
            </label>

            <label className="apply-form__field">
              <span>비상 연락처</span>
              <input type="tel" name="emergency" placeholder="+82-00-0000-0000" />
            </label>

            <fieldset className="apply-form__field apply-form__radio">
              <legend>숙박 연계 필요 여부</legend>
              <label>
                <input type="radio" name="stay" value="yes" required />
                필요함
              </label>
              <label>
                <input type="radio" name="stay" value="no" />
                필요없음
              </label>
            </fieldset>

            <label className="apply-form__field apply-form__full">
              <span>추가 요청 사항</span>
              <textarea name="notes" rows="4" placeholder="특이사항이 있다면 남겨주세요." />
            </label>

            <label className="apply-form__checkbox apply-form__full">
              <input type="checkbox" required />
              개인정보 수집 및 이용에 동의합니다.
            </label>
          </div>

          <div className="apply-form__actions">
            <button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "제출 중..." : "신청 완료"}
            </button>
            <span className="apply-form__hint">
              제출 후 확인 페이지로 이동합니다.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
