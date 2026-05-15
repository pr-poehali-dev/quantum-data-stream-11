import { useNavigate } from "react-router-dom";

const fillings = [
  {
    name: "Вишня–кокос с чизкейком",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/9440c48e-3b59-49d5-862a-cd6843aaed31.png",
  },
  {
    name: "Морковный",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/bd5d92dc-dcd6-4f9a-9be0-d3e153adb323.png",
  },
  {
    name: "Шоколад–мята",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/502adb9c-c488-4879-888f-b753aedd5af2.png",
  },
  {
    name: "Блэк–Джек",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/446672fd-ee5f-4538-8f74-75934615f336.png",
  },
  {
    name: "Ореховый",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/d5dd19a7-f708-4787-9c4a-7ced135ff43d.png",
  },
  {
    name: "Панчо",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/54858b8a-7b4c-4c77-bd50-cf3fc0a017ce.png",
  },
  {
    name: "Красный бархат",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/ca0ddd72-6306-4b7f-8a37-3db3953074f9.png",
  },
  {
    name: "Манго–маракуйя",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/dfdc7497-9036-49dc-9e4c-a42b1fe275ac.png",
  },
  {
    name: "Наполеон",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/215efd28-f3ba-4170-8837-ad8aca13bb6f.png",
  },
  {
    name: "Маково–клубничный",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/4af71856-a7ba-4cf8-9c7c-7a80c08ba0d0.png",
  },
  {
    name: "Ягодный мусс",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/535befe3-4e5e-48bc-85a1-779988bcfb49.png",
  },
  {
    name: "Шоколадный",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/4f27b66a-bc05-452d-ace2-a6bf9d7b2438.png",
  },
  {
    name: "ОРЕО",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/9f7b169a-95c2-4ec0-8cab-c6612a82b4f3.png",
  },
  {
    name: "Фисташка–малина",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/25686e67-4242-49f8-be5d-593bbf45e0a0.png",
  },
  {
    name: "Медовик",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/13eebf1b-5312-411d-b156-f7d2eaf5c1bc.png",
  },
  {
    name: "Сникерс",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/546af9f9-7a1f-4844-8c56-f8066ca96593.png",
  },
  {
    name: "Молочная девочка",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/db1e34e7-34f7-4704-839c-af8b6dd48738.png",
  },
  {
    name: "Рафаэлло",
    img: "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/e6624931-b287-40e0-ad21-6601eb7f3501.png",
  },
];

export default function Catalog() {
  const navigate = useNavigate();

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
          <a href="/catalog" style={{ borderBottom: "3px solid var(--primary)" }}>Каталог начинок</a>
          <a href="/about">О нас</a>
          <a href="/gallery">Галерея</a>
          <a href="#">Контакты</a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="https://www.instagram.com/tortik_ot_kotika?utm_source=qr&igsh=aGtqaWJvbzN2bmN5" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "var(--primary)", color: "white", textDecoration: "none", fontSize: "16px" }}>📷</a>
          <a href="https://wa.me/89856008537" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "var(--primary)", color: "white", textDecoration: "none", fontSize: "16px" }}>💬</a>
          <a href="https://t.me/+79856008537" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "var(--primary)", color: "white", textDecoration: "none", fontSize: "16px" }}>✈️</a>
          <button className="btn-cta" onClick={() => navigate("/")}>Заказать торт</button>
        </div>
      </header>

      <main>
        <section className="section-padding">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "12px" }}>
            КАТАЛОГ НАЧИНОК
          </h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: "48px", fontSize: "16px" }}>
            Выбери начинку — и мы создадим твой идеальный торт
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "32px",
            maxWidth: "1100px",
            margin: "0 auto"
          }}>
            {fillings.map((item) => (
              <div key={item.name} style={{
                border: "var(--border)",
                boxShadow: "var(--shadow)",
                background: "white",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.15s"
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translate(-3px,-3px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "none")}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "20px 24px" }}>
                  <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: "16px", margin: 0 }}>
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}