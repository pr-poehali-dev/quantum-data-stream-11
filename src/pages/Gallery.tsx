import { useState } from "react";

const photos = [
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/ae872913-75f2-40df-9718-c10b9924a0ad.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/a6a9025b-6e17-4577-a9d5-75089ab3175d.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/8d2c1c48-e375-4d35-90ea-4e44c329ef97.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/41f71503-94e7-4ac2-8162-19ef4c807bab.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/5fa64d0a-9aae-4c68-b450-ad6c7329fb2d.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/bucket/4705f882-09a8-4a6d-91ca-2d9d44651058.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/files/cd6bc675-46d0-4206-aa43-24cd09022f16.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/files/f0913fe4-fdee-4dcb-a2ff-024a7e7c0fae.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/files/c92050cd-3c56-4d0d-9f65-f42ade520d2d.jpg",
  "https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/files/1147c1eb-8325-41d6-8bd2-77d47af29711.jpg",
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

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
          <a href="/gallery" style={{ borderBottom: "3px solid var(--primary)" }}>Галерея</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta" onClick={() => window.location.href = "/"}>Заказать торт</button>
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
