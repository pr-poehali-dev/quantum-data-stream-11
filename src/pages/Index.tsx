import { useState } from "react";

const ORDER_URL = "https://functions.poehali.dev/e6efea22-0398-49fb-b01a-9a4ba4d75728";

function OrderForm() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "", filling: "", design: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(ORDER_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", border: "var(--border)", background: "white",
    fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "14px", outline: "none",
    boxShadow: "3px 3px 0 var(--dark)"
  };
  const labelStyle: React.CSSProperties = { fontWeight: 800, fontSize: "12px", textTransform: "uppercase", marginBottom: "6px", display: "block" };

  if (status === "success") return (
    <div style={{ textAlign: "center", padding: "60px 20px" }}>
      <div style={{ fontSize: "60px", marginBottom: "20px" }}>🐱</div>
      <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "24px", marginBottom: "12px" }}>ЗАЯВКА ОТПРАВЛЕНА!</h3>
      <p style={{ color: "#666" }}>Мы свяжемся с вами в ближайшее время для уточнения деталей.</p>
    </div>
  );

  return (
    <form onSubmit={submit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
      <div style={{ gridColumn: "1" }}>
        <label style={labelStyle}>Ваше имя *</label>
        <input required style={inputStyle} placeholder="Как вас зовут?" value={form.name} onChange={set("name")} />
      </div>
      <div style={{ gridColumn: "2" }}>
        <label style={labelStyle}>Телефон *</label>
        <input required style={inputStyle} placeholder="+7 900 000 00 00" value={form.phone} onChange={set("phone")} />
      </div>
      <div>
        <label style={labelStyle}>Дата мероприятия</label>
        <input type="date" style={inputStyle} value={form.date} onChange={set("date")} />
      </div>
      <div>
        <label style={labelStyle}>Количество гостей</label>
        <input style={inputStyle} placeholder="Например: 30 человек" value={form.guests} onChange={set("guests")} />
      </div>
      <div>
        <label style={labelStyle}>Начинка</label>
        <input style={inputStyle} placeholder="Шоколад, ваниль, фрукты..." value={form.filling} onChange={set("filling")} />
      </div>
      <div>
        <label style={labelStyle}>Пожелания по дизайну</label>
        <input style={inputStyle} placeholder="Цветы, фигурки, надпись..." value={form.design} onChange={set("design")} />
      </div>
      <div style={{ gridColumn: "1 / -1" }}>
        {status === "error" && <p style={{ color: "red", marginBottom: "12px", fontWeight: 700 }}>Ошибка отправки. Попробуйте ещё раз.</p>}
        <button type="submit" className="btn-cta" disabled={status === "loading"}
          style={{ background: "var(--primary)", color: "white", width: "100%", padding: "16px", fontSize: "16px" }}>
          {status === "loading" ? "Отправляем..." : "🎂 Отправить заявку"}
        </button>
      </div>
    </form>
  );
}

export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
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
        <nav>
          <a href="/catalog">Каталог начинок</a>
          <a href="/about">О нас</a>
          <a href="#">Галерея</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Заказать торт</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              КАЖДЫЙ ТОРТ —
              <br />
              ЭТО <span>история</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Авторские торты на заказ. Делаем каждый торт с душой — от нежных бисквитов до шедевров с живыми цветами. Любой повод, любая фантазия.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать торт
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть работы
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/917150d0-24d1-4d31-b342-f4c091b48a40.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundColor: "#f5e6e0" }}>
            <div className="sticker">
              РУЧНАЯ
              <br />
              РАБОТА
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #АВТОРСКИЙ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              С ЛЮБОВЬЮ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ТОРТЫ НА ЗАКАЗ * ЖИВЫЕ ЦВЕТЫ * ИНДИВИДУАЛЬНЫЙ ДИЗАЙН * ТОЛЬКО НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ * ДОСТАВКА ПО ГОРОДУ *
            ТОРТЫ НА ЗАКАЗ * ЖИВЫЕ ЦВЕТЫ * ИНДИВИДУАЛЬНЫЙ ДИЗАЙН * ТОЛЬКО НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ * ДОСТАВКА ПО ГОРОДУ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШИ ХИТЫ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Весь каталог
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/4705f882-09a8-4a6d-91ca-2d9d44651058.jpg"
                  alt="Ягодная классика"
                  style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "center 30%" }}
                />
              </div>
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Ягодная классика</h3>
                  <span className="price">от 8 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Торт со свежими ягодами и шоколадом. Клубника, малина, голубика на нежном креме с шоколадными подтёками.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/files/f0913fe4-fdee-4dcb-a2ff-024a7e7c0fae.jpg"
                alt="Праздничный торт"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Праздничный</h3>
                  <span className="price">от 4 500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>День рождения, юбилей, корпоратив — создадим торт под любое событие.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Новинка
              </span>
              <img
                src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/files/1147c1eb-8325-41d6-8bd2-77d47af29711.jpg"
                alt="Капкейки и макаруны"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Капкейки и макаруны</h3>
                  <span className="price">от 150 ₽/шт</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Идеально для фуршетов и корпоративных подарков. Упаковка в брендированных коробках.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МАГИЯ В КАЖДОМ СЛОЕ.</h2>
            <p className="vibe-text">
              Мы не просто печём — мы создаём воспоминания. От первого эскиза до готового торта проходит каждый шаг с вниманием к деталям. Только натуральные ингредиенты, авторские рецептуры и декор, который удивляет.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div
            className="vibe-img"
            style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/files/dc17cca4-6ade-4420-a975-6d0476d143ee.jpg')" }}
          ></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @ТОРТИК.ОТ.КОТИКА
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/files/cd6bc675-46d0-4206-aa43-24cd09022f16.jpg"
                alt="Торт 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/files/f0913fe4-fdee-4dcb-a2ff-024a7e7c0fae.jpg"
                alt="Торт 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/files/c92050cd-3c56-4d0d-9f65-f42ade520d2d.jpg"
                alt="Торт 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/files/1147c1eb-8325-41d6-8bd2-77d47af29711.jpg"
                alt="Торт 4"
              />
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ background: "var(--bg)", borderTop: "var(--border)" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 className="section-title" style={{ marginBottom: "12px", textAlign: "center" }}>ЗАКАЗАТЬ ТОРТ</h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: "40px", fontSize: "16px" }}>
              Заполните форму — мы свяжемся с вами и обсудим все детали
            </p>
            <OrderForm />
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">
            <img
              src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/233f26f5-ba9a-4607-8df1-1344f2719e4d.jpg"
              alt="Кондитерская студия"
              style={{ height: "80px", width: "auto", objectFit: "contain" }}
            />
          </div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Авторская кондитерская студия. Торты на заказ с любовью и вниманием к каждой детали.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Каталог
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Галерея
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 9:00 – 20:00</li>
            <li>Сб–Вс: 10:00 – 18:00</li>
            <li style={{ marginTop: "10px", color: "var(--primary)", fontWeight: 700 }}>
              Приём заказов онлайн
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Telegram</li>
          </ul>
        </div>
      </footer>
    </>
  );
}