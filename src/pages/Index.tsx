export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">SWEET*STUDIO</div>
        <nav>
          <a href="#">Каталог</a>
          <a href="#">О нас</a>
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
          <div className="hero-img" style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/files/cd6bc675-46d0-4206-aa43-24cd09022f16.jpg')" }}>
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
              <img
                src="https://cdn.poehali.dev/projects/5b194af4-37bf-4e02-8f5b-610294bb3a9a/files/cd6bc675-46d0-4206-aa43-24cd09022f16.jpg"
                alt="Свадебный торт"
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
                  <h3>Свадебный</h3>
                  <span className="price">от 8 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Многоярусный торт с живыми цветами и кружевным декором. Любой вкус и дизайн.
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
            @SWEET.STUDIO
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
      </main>

      <footer>
        <div>
          <div className="footer-logo">SWEET*STUDIO</div>
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
