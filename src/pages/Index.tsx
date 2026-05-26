import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [showContacts, setShowContacts] = useState(false);
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
          <a href="/gallery">Галерея</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setShowContacts(v => !v); }}>Контакты</a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="https://www.instagram.com/tortik_ot_kotika?utm_source=qr&igsh=aGtqaWJvbzN2bmN5" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "var(--primary)", color: "white", textDecoration: "none", fontSize: "16px" }}>📷</a>
          <a href="https://wa.me/79856008537" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "var(--primary)", color: "white", textDecoration: "none", fontSize: "16px" }}>💬</a>
          <a href="https://t.me/+79856008537" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "var(--primary)", color: "white", textDecoration: "none", fontSize: "16px" }}>✈️</a>
          <button className="btn-cta" onClick={() => document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })}>Заказать торт</button>
        </div>
      </header>

      {showContacts && (
        <div onClick={() => setShowContacts(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "white", borderRadius: "20px", padding: "36px 40px", maxWidth: "360px", width: "90%", textAlign: "center", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}>
            <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "18px", marginBottom: "8px" }}>Контакты</h2>
            <a href="tel:+79856008537" style={{ display: "block", fontSize: "24px", fontWeight: 700, color: "var(--primary)", textDecoration: "none", margin: "16px 0" }}>+7 985 600-85-37</a>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
              <a href="https://wa.me/79856008537" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "12px", borderRadius: "12px", background: "#25D366", color: "white", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>
                💬 WhatsApp
              </a>
              <a href="https://t.me/+79856008537" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "12px", borderRadius: "12px", background: "#2AABEE", color: "white", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>
                ✈️ Telegram
              </a>
              <a href="https://icq.im/79856008537" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "12px", borderRadius: "12px", background: "#8B5CF6", color: "white", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>
                💜 MAX
              </a>
            </div>
            <button onClick={() => setShowContacts(false)} style={{ marginTop: "24px", background: "none", border: "none", color: "#999", cursor: "pointer", fontSize: "14px" }}>Закрыть</button>
          </div>
        </div>
      )}

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
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }} onClick={() => document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })}>
                Заказать торт
              </button>
              <button className="btn-cta" style={{ background: "white" }} onClick={() => navigate("/gallery")}>
                Смотреть работы
              </button>
              <a href="https://wa.me/79856008537" target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ background: "#25D366", color: "white", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                💬 Написать нам
              </a>
            </div>
          </div>
          <div className="hero-img" style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/61de51f6-2be9-4ac0-8b4e-a5295c4f1d4d.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
            <div className="sticker">
              РУЧНАЯ
              <br />
              РАБОТА
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
              <div style={{ position: "relative", overflow: "hidden" }}>
                <span className="menu-tag" style={{ position: "absolute", top: "12px", left: "12px", zIndex: 2 }}>Хит продаж</span>
                <img
                  src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/0d092b8d-c406-4f65-9794-9b916c34b933.jpg"
                  alt="Ягодная классика"
                  style={{ width: "100%", display: "block", objectFit: "cover" }}
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
                  <span className="price">2 кг от 7 500 ₽</span>
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
                src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/8ae999de-132a-4e0e-8f6d-6fe8516658a8.jpg"
                alt="Торт в стиле Ламбет"
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
                  <h3>Торт в стиле Ламбет</h3>
                  <span className="price">от 3 700 ₽/кг</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Воздушный крем-чиз с нежными кремовыми рюшами и жемчужинами в винтажном стиле Ламбет — элегантно и трогательно.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Капкейки
              </span>
              <img
                src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/bd96ae11-abdc-4d15-8bf5-56283c3d20c7.JPG"
                alt="Капкейки"
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
                  <h3>Капкейки</h3>
                  <span className="price">350 ₽/шт</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Нежные капкейки с воздушным кремом, украшенные свежими ягодами и мятой. Малиновые и шоколадные — на любой вкус. Идеально для праздника или приятного угощения.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">НАШИ ДЕСЕРТЫ.</h2>
            <p className="vibe-text">
              Мы не просто печём — мы создаём воспоминания. От первого эскиза до готового торта проходит каждый шаг с вниманием к деталям. Только натуральные ингредиенты, авторские рецептуры и декор, который удивляет.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наши десерты
            </button>
            <div className="vibe-extra-photos">
              <div className="vibe-extra-item">
                <div className="vibe-extra-img-wrap">
                  <img src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/f6e03eac-1ce7-4ca5-babe-0e28cbc93f0a.jpg" alt="Меренговый рулет" />
                </div>
                <div className="desserts-caption">
                  <span className="desserts-name">Меренговый рулет</span>
                  <span className="desserts-price">3 500 ₽</span>
                </div>
              </div>
              <div className="vibe-extra-item">
                <div className="vibe-extra-img-wrap">
                  <img src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/f97768e7-133b-4508-a124-ef19a44ec214.jpg" alt="Безе" />
                </div>
                <div className="desserts-caption">
                  <span className="desserts-name">Безе</span>
                  <span className="desserts-price">80 ₽/шт</span>
                </div>
              </div>
              <div className="vibe-extra-item">
                <div className="vibe-extra-img-wrap">
                  <img src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/77da004d-3206-4ff1-9e60-37d692525b92.jpg" alt="Пряничные открытки" />
                </div>
                <div className="desserts-caption">
                  <span className="desserts-name">Пряничные открытки</span>
                  <span className="desserts-price">от 250 ₽/шт</span>
                </div>
              </div>
            </div>
          </div>
          <div className="desserts-gallery">
            <div className="desserts-gallery-item">
              <div className="desserts-img-wrap">
                <img src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/d2f2434c-7aa3-48fa-812e-22df4a6fa8f0.jpg" alt="Бенто-торт" />
              </div>
              <div className="desserts-caption">
                <span className="desserts-name">Бенто 500 гр.</span>
                <span className="desserts-price">2 000 ₽</span>
              </div>
            </div>
            <div className="desserts-gallery-item">
              <div className="desserts-img-wrap">
                <img src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/bf7f3e3b-9845-4f40-8463-83d5a2c93506.jpg" alt="Эскимо" />
              </div>
              <div className="desserts-caption">
                <span className="desserts-name">Эскимо</span>
                <span className="desserts-price">280 ₽/шт</span>
              </div>
            </div>
            <div className="desserts-gallery-item">
              <div className="desserts-img-wrap">
                <img src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/06de8d0f-89fe-485d-a7e9-8a1498b2360e.jpg" alt="Трайфлы" />
              </div>
              <div className="desserts-caption">
                <span className="desserts-name">Трайфлы</span>
                <span className="desserts-price">350 ₽/шт</span>
              </div>
            </div>
            <div className="desserts-gallery-item">
              <div className="desserts-img-wrap">
                <img src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/6a68b182-f895-43f0-a7ec-91935647720c.jpg" alt="Кейк-попсы" />
              </div>
              <div className="desserts-caption">
                <span className="desserts-name">Кейк-попсы</span>
                <span className="desserts-price">250 ₽/шт</span>
              </div>
            </div>
            <div className="desserts-gallery-item">
              <div className="desserts-img-wrap">
                <img src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/238a1784-1c92-46af-b3ce-4d7cbf114242.jpg" alt="Леденцы" />
              </div>
              <div className="desserts-caption">
                <span className="desserts-name">Леденцы</span>
                <span className="desserts-price">80 ₽/шт</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "12px", textAlign: "center" }}>
            РЕАЛИСТИЧНЫЕ 3D-ТОРТЫ
          </h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: "12px", fontSize: "16px", maxWidth: "600px", margin: "0 auto 12px" }}>
            Мы изготавливаем реалистичные 3D-торты в форме любого предмета — от стейка до батарейки. Каждый торт — настоящее произведение искусства, которое поражает гостей.
          </p>
          <p style={{ textAlign: "center", marginBottom: "40px", fontSize: "18px", fontWeight: 700, color: "var(--primary)" }}>
            от 4 000 ₽/кг
          </p>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/5e43eb15-e7cf-40a4-89f7-08dd4870b54b.JPG"
                alt="3D торт стейк"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/83260b32-16d5-4361-a263-a7b68efc8c77.JPG"
                alt="3D торт сгущёнка"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/c20b6742-dff2-45df-8dba-2d83ea244be7.JPG"
                alt="3D торт батарейка"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/5172a903-26ec-4d0a-9954-5d1432c2034f.JPG"
                alt="3D торт ёжик"
              />
            </div>
          </div>
        </section>

        <section id="order-form" className="section-padding" style={{ background: "var(--bg)", borderTop: "var(--border)" }}>
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
          <p style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.6" }}>
            <strong>Самовывоз:</strong> Московская область, г. Ступино, ул. Пристанционная 6, 2 этаж, офис 204
          </p>
          <p style={{ marginTop: "6px", fontSize: "14px", lineHeight: "1.6" }}>
            <a href="tel:+79856008537" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>+7 985 600-85-37</a>
          </p>
          <p style={{ marginTop: "8px", fontSize: "14px", lineHeight: "1.6" }}>
            Доставка по Москве и Московской области. Стоимость доставки рассчитывается индивидуально.
          </p>
        </div>
      </footer>
    </>
  );
}