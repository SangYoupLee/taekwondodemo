export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "GET") {
    res.status(405).json({ ok: false, error: "METHOD_NOT_ALLOWED" });
    return;
  }

  const endpoint = process.env.FORM_READ_ENDPOINT || process.env.FORM_ENDPOINT;
  if (!endpoint) {
    res.status(500).json({ ok: false, error: "FORM_READ_ENDPOINT_MISSING" });
    return;
  }

  const adminPasscode = process.env.ADMIN_PASSCODE || "";
  const provided = req.query?.passcode || "";
  if (adminPasscode && provided !== adminPasscode) {
    res.status(401).json({ ok: false, error: "UNAUTHORIZED" });
    return;
  }

  const token = process.env.FORM_ACCESS_TOKEN || "";
  const url = new URL(endpoint);
  if (token) {
    url.searchParams.set("token", token);
  }

  try {
    const response = await fetch(url.toString());
    const json = await response.json().catch(() => ({}));
    res.status(response.ok ? 200 : 500).json(json);
  } catch (error) {
    res.status(500).json({ ok: false, error: "READ_FAILED" });
  }
}
