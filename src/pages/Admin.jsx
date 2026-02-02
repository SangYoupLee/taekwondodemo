import { useEffect, useState } from "react";
import { fetchSubmissions } from "../lib/formSubmit.js";
import "./Admin.css";

export default function Admin() {
  const [status, setStatus] = useState("loading");
  const [rows, setRows] = useState([]);
  const [error, setError] = useState("");
  const [passcode, setPasscode] = useState("");
  const [query, setQuery] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("all");
  const [isAuthed, setIsAuthed] = useState(() => {
    return sessionStorage.getItem("admin_authed") === "true";
  });

  useEffect(() => {
    if (!isAuthed) return;
    let active = true;
    const storedPasscode = sessionStorage.getItem("admin_passcode") || "";
    fetchSubmissions(storedPasscode)
      .then((data) => {
        if (!active) return;
        const items = Array.isArray(data?.rows) ? data.rows : [];
        setRows(items);
        setStatus("ready");
      })
      .catch((err) => {
        if (!active) return;
        setError(err?.message || "FAILED");
        setStatus("error");
      });

    return () => {
      active = false;
    };
  }, [isAuthed]);

  const handleAuth = (event) => {
    event.preventDefault();
    sessionStorage.setItem("admin_passcode", passcode);
    fetchSubmissions(passcode)
      .then((data) => {
        const items = Array.isArray(data?.rows) ? data.rows : [];
        setRows(items);
        sessionStorage.setItem("admin_authed", "true");
        setIsAuthed(true);
        setError("");
        setStatus("ready");
      })
      .catch((err) => {
        sessionStorage.removeItem("admin_authed");
        sessionStorage.removeItem("admin_passcode");
        setError(err?.message || "UNAUTHORIZED");
      });
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authed");
    sessionStorage.removeItem("admin_passcode");
    setIsAuthed(false);
    setPasscode("");
    setRows([]);
    setStatus("loading");
  };

  const filteredRows = rows.filter((row) => {
    const text = `${row.name || ""} ${row.email || ""} ${row.phone || ""}`.toLowerCase();
    const matchQuery = query ? text.includes(query.toLowerCase()) : true;
    const matchDivision =
      divisionFilter === "all" ? true : String(row.division || "") === divisionFilter;
    return matchQuery && matchDivision;
  });

  return (
    <section className="page">
      <div className="page__inner">
        <div className="card">
          <h2 className="card__title">제출 목록 보기</h2>
          <p className="card__meta">
            구글 시트에서 가져온 제출 목록입니다. 최신 데이터는 새로고침 후
            확인해주세요.
          </p>
        </div>

        {!isAuthed && (
          <div className="card">
            <h3 className="card__title">관리자 확인</h3>
            <p className="card__meta">관리자 코드를 입력해주세요.</p>
            <form className="admin-auth" onSubmit={handleAuth}>
              <input
                type="password"
                value={passcode}
                onChange={(event) => setPasscode(event.target.value)}
                placeholder="Admin passcode"
              />
              <button type="submit">확인</button>
            </form>
            {error && error !== "PASSCODE_MISMATCH" && (
              <p className="card__meta">
                코드가 올바르지 않거나 권한이 없습니다. ({error})
              </p>
            )}
          </div>
        )}

        {isAuthed && (
          <div className="card">
            <div className="admin-toolbar">
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="이름/이메일/연락처 검색"
              />
              <select
                value={divisionFilter}
                onChange={(event) => setDivisionFilter(event.target.value)}
              >
                <option value="all">전체 종목</option>
                <option value="sparring">겨루기</option>
                <option value="poomsae">품새</option>
                <option value="both">겨루기 + 품새</option>
              </select>
              <button type="button" onClick={handleLogout}>
                로그아웃
              </button>
            </div>
            {status === "loading" && <p className="card__meta">불러오는 중...</p>}
            {status === "error" && (
              <p className="card__meta">
                불러오기에 실패했습니다. 설정을 확인해주세요. ({error})
              </p>
            )}
            {status === "ready" && rows.length === 0 && (
              <p className="card__meta">현재 제출된 내역이 없습니다.</p>
            )}

            {status === "ready" && filteredRows.length > 0 && (
              <div className="admin-table__wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>접수일</th>
                      <th>이름</th>
                      <th>이메일</th>
                      <th>연락처</th>
                      <th>종목</th>
                      <th>체급</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRows.map((row) => (
                      <tr key={row.submissionId || row.timestamp}>
                        <td>{row.timestamp || "-"}</td>
                        <td>{row.name || "-"}</td>
                        <td>{row.email || "-"}</td>
                        <td>{row.phone || "-"}</td>
                        <td>{row.division || "-"}</td>
                        <td>{row.weightClass || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
