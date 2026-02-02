export default function Footer() {
  return (
    <footer style={{ background: "#0f172a", color: "white", padding: "28px 16px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", opacity: 0.85, fontSize: 14 }}>
        <div>
          <b>Contact</b> | Phone: +82-00-0000-0000 | Email: info@example.com
        </div>
        <div style={{ marginTop: 8 }}>
          © {new Date().getFullYear()} Taekwondo Championship
        </div>
      </div>
    </footer>
  );
}
