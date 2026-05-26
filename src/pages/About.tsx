export default function About() {
  return (
    <>
      <div className="grain-overlay" />
      <header className="header">
        <a href="/" style={{ textDecoration: "none" }}>
          <div className="logo" style={{ overflow: "visible", display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/233f26f5-ba9a-4607-8df1-1344f2719e4d.jpg"
              alt="Кондитерская студия"
              style={{ height: "100px", width: "auto", objectFit: "contain", display: "block" }}
            />
            <span style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "14px", lineHeight: 1.2, color: "var(--dark)" }}>
              ТОРТИК<br />ОТ КОТИКА
            </span>
          </div>
        </a>
        <nav>
          <a href="/catalog">Каталог начинок</a>
          <a href="/about" style={{ borderBottom: "3px solid var(--primary)" }}>О нас</a>
          <a href="/gallery">Галерея</a>
          <a href="#">Контакты</a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="https://www.instagram.com/tortik_ot_kotika?utm_source=qr&igsh=aGtqaWJvbzN2bmN5" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "var(--primary)", color: "white", textDecoration: "none", fontSize: "16px" }}>📷</a>
          <a href="https://wa.me/79856008537" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "var(--primary)", color: "white", textDecoration: "none", fontSize: "16px" }}>💬</a>
          <a href="https://t.me/+79856008537" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "var(--primary)", color: "white", textDecoration: "none", fontSize: "16px" }}>✈️</a>
          <button className="btn-cta" onClick={() => window.location.href = "/"}>Заказать торт</button>
        </div>
      </header>

      <main>
        <section className="section-padding" style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 className="section-title" style={{ marginBottom: "48px", textAlign: "center" }}>О НАС</h2>

          <div style={{ display: "grid", gap: "32px" }}>
            <div style={{ border: "var(--border)", boxShadow: "var(--shadow)", background: "white", padding: "40px 48px" }}>
              <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--dark)", marginBottom: "24px" }}>
                Уже более <strong>10 лет</strong> мы создаём не просто торты, а настоящие произведения искусства, которые становятся украшением вашего праздника. Каждый заказ для нас — это уникальная история, в которую мы вкладываем душу, опыт и современные технологии.
              </p>
              <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--dark)", marginBottom: "24px" }}>
                Мы верим, что идеальный торт — это гармония вкуса, эстетики и внимания к деталям. Поэтому тщательно подбираем ингредиенты, разрабатываем индивидуальные дизайны и всегда учитываем ваши пожелания.
              </p>
              <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--dark)" }}>
                Доверьте нам свои идеи — и мы воплотим их в жизнь, чтобы ваш торт стал главным событием любого торжества!
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", textAlign: "center" }}>
              {[
                { num: "10+", label: "лет опыта" },
                { num: "1000+", label: "счастливых клиентов" },
                { num: "14", label: "видов начинок" },
              ].map(({ num, label }) => (
                <div key={label} style={{ border: "var(--border)", boxShadow: "var(--shadow)", background: "white", padding: "32px 20px" }}>
                  <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, fontSize: "36px", color: "var(--primary)", marginBottom: "8px" }}>{num}</div>
                  <div style={{ fontWeight: 600, fontSize: "14px", textTransform: "uppercase" }}>{label}</div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center" }}>
              <a href="/" className="btn-cta" style={{ background: "var(--primary)", color: "white", display: "inline-block" }}>
                Заказать торт
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}