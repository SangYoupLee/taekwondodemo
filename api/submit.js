export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "METHOD_NOT_ALLOWED" });
    return;
  }

  const endpoint = process.env.FORM_ENDPOINT;
  if (!endpoint) {
    res.status(500).json({ ok: false, error: "FORM_ENDPOINT_MISSING" });
    return;
  }

  const accessToken = process.env.FORM_ACCESS_TOKEN || "";
  let payload = req.body;

  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload);
    } catch {
      payload = {};
    }
  }

  const body = JSON.stringify({
    ...(payload || {}),
    accessToken: accessToken || undefined,
  });

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    const json = await response.json().catch(() => ({}));
    res.status(response.ok ? 200 : 500).json(json);
  } catch (error) {
    res.status(500).json({ ok: false, error: "SUBMIT_FAILED" });
  }
}
