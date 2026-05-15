import { useState } from "react";

const photos = [
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/ae872913-75f2-40df-9718-c10b9924a0ad.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/a6a9025b-6e17-4577-a9d5-75089ab3175d.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/8d2c1c48-e375-4d35-90ea-4e44c329ef97.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/41f71503-94e7-4ac2-8162-19ef4c807bab.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/5fa64d0a-9aae-4c68-b450-ad6c7329fb2d.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/4705f882-09a8-4a6d-91ca-2d9d44651058.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/901e5a32-576f-4591-916f-78eaeee32e7c.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/a3512fc3-f659-462b-8322-83c783b4fef9.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/2e09d765-f501-4bb2-bb68-fcd88c529e2d.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/1f6352e0-5a05-40bb-937f-c64002942cfb.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/b3549d04-86f6-4922-bc06-96eeb712df35.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/6120dc70-b234-45ab-8065-57d654f6ffe2.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/7861ca3c-32b2-4539-ba2c-29a16e499ffe.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/44a33a0a-3bf2-411a-bee3-b97074c51902.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/7c8017f4-5635-4cba-8a68-15abd1757fc9.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/cabeff03-ddff-4617-9e02-26ce9044177f.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/7678908f-d382-47e3-bb8b-7c06813cb064.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/05d1a6cd-399d-436a-bc17-a309d4dfaa27.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/0a1eaa81-cdc4-4548-b19f-078cf51012a3.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/d1b893ba-3ae7-4fa1-afc9-1bd483fc3e07.jpg",
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

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
          <a href="/about">О нас</a>
          <a href="/gallery" style={{ borderBottom: "3px solid var(--primary)" }}>Галерея</a>
          <a href="#">Контакты</a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="https://www.instagram.com/tortik_ot_kotika?utm_source=qr&igsh=aGtqaWJvbzN2bmN5" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "var(--primary)", color: "white", textDecoration: "none", fontSize: "16px" }}>📷</a>
          <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "var(--primary)", color: "white", textDecoration: "none", fontSize: "16px" }}>💬</a>
          <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", background: "var(--primary)", color: "white", textDecoration: "none", fontSize: "16px" }}>✈️</a>
          <button className="btn-cta" onClick={() => window.location.href = "/"}>Заказать торт</button>
        </div>
      </header>

      <main>
        <section className="section-padding">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "12px" }}>ГАЛЕРЕЯ</h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: "48px", fontSize: "16px" }}>
            Наши работы — каждый торт уникален
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
            maxWidth: "1100px",
            margin: "0 auto"
          }}>
            {photos.map((src, i) => (
              <div
                key={i}
                onClick={() => setLightbox(src)}
                style={{
                  border: "var(--border)",
                  boxShadow: "var(--shadow)",
                  overflow: "hidden",
                  cursor: "zoom-in",
                  aspectRatio: "3/4",
                  transition: "transform 0.15s"
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translate(-3px,-3px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "none")}
              >
                <img
                  src={src}
                  alt={`Торт ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 1000, cursor: "zoom-out", padding: "20px"
          }}
        >
          <img
            src={lightbox}
            alt="Увеличенное фото"
            style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", border: "4px solid white" }}
          />
        </div>
      )}
    </>
  );
}