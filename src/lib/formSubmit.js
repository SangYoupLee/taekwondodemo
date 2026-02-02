function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

function buildSubmissionId(payload) {
  const source = [
    payload.email || "",
    payload.birthdate || "",
    payload.phone || "",
    payload.division || "",
  ].join("|");
  return hashString(source);
}

export async function submitApplication(payload) {
  const submissionId = payload.submissionId || buildSubmissionId(payload);
  const body = {
    ...payload,
    submissionId,
  };

  const response = await fetch("/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await response.json().catch(() => ({}));
  if (!response.ok || json?.ok === false) {
    throw new Error(json?.error || "FORM_SUBMIT_FAILED");
  }
  return json;
}

export async function fetchSubmissions(passcode) {
  const url = new URL("/api/admin", window.location.origin);
  if (passcode) {
    url.searchParams.set("passcode", passcode);
  }

  const response = await fetch(url.toString());
  const json = await response.json().catch(() => ({}));
  if (!response.ok || json?.ok === false) {
    throw new Error(json?.error || "FORM_READ_FAILED");
  }
  return json;
}
