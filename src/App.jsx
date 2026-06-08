export default function App() {
  return (
    <div>

      {/* GLOBAL ATMOSPHERE */}
      <div className="global-claw-overlay"></div>

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">

        <div className="logo-wrap">

          <img
            src="/wraptor-emblem.png"
            alt="Wraptor Emblem"
            className="real-logo"
          />

          <div className="logo-text">

            <span className="logo-main">
              WRAPTOR
            </span>

            <span className="logo-sub">
              DESIGNS
            </span>

          </div>

        </div>

        <nav>

          <a href="#services">
            Services
          </a>

          <a href="#portfolio">
            Portfolio
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>

        
      </header>

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        <div className="hero-claw-overlay"></div>

        <div className="hero-overlay"></div>

        <div className="hero-grid">

          <div className="hero-left">

            <p className="eyebrow">
              Custom Graphics. Bold Brands. Maximum Impact.
            </p>

            <h1>
              WE BUILD
              <span>ATTENTION</span>
            </h1>

            <p className="subtitle">
              Custom graphics, decals, branding,
and vinyl solutions designed to
help your business get noticed.
            </p>

            <div className="hero-buttons">

              <a href="#contact">
                Start Your Transformation
              </a>

              <a
                href="#portfolio"
                className="secondary-button"
              >
                View Featured Builds
              </a>

            </div>

          </div>

          <div className="hero-right">

            <img
              src="/hero-car.png"
              alt="Wraptor Supercar"
            />

          </div>

        </div>

      </section>

      {/* =========================
          SHOWCASE
      ========================= */}

      <section className="fullscreen-showcase">

        <div className="showcase-overlay"></div>

        <div className="showcase-content">

          <p>
            Built To Be Seen
          </p>

          <h2>
            WE DON’T JUST
            <span> WRAP VEHICLES.</span>
          </h2>

          <h3>
            WE BUILD ATTENTION.
          </h3>

        </div>

      </section>

{/* =========================
    SERVICES
========================= */}

<section
  id="services"
  className="section dark"
>

  <div className="section-title-wrap">

    <h2>
      What We Transform
    </h2>

  </div>

  <div className="card-grid">

    <div className="service-card">

      <h3>
        Custom Graphics & Decals
      </h3>

      <p>
        Custom vinyl graphics, decals, striping,
        and promotional designs built to make
        your brand stand out.
      </p>

    </div>

    <div className="service-card">

      <h3>
        Vehicle Lettering
      </h3>

      <p>
        Professional vehicle lettering and
        branding solutions designed to increase
        visibility and recognition.
      </p>

    </div>

    <div className="service-card">

      <h3>
        Business Branding
      </h3>

      <p>
        Logos, visual identity systems, and
        marketing graphics that help businesses
        create a lasting impression.
      </p>

    </div>

    <div className="service-card">

      <h3>
        Signs & Promotional Graphics
      </h3>

      <p>
        Banners, signage, window graphics,
        and promotional materials tailored
        to your business needs.
      </p>

    </div>

  </div>

</section>
      {/* =========================
          PORTFOLIO
      ========================= */}

      <section
        id="portfolio"
        className="section dark"
      >

        <div className="section-title-wrap">

          <p className="impact-small">
            Signature Builds
          </p>

          <h2>
            FEATURED
            <span style={{ color: '#a8ff00' }}>
              {' '}PORTFOLIO
            </span>
          </h2>

        </div>

        <div className="portfolio-grid">

          {/* CARD 1 */}

          <div className="portfolio-card">

            <div
              className="portfolio-image"
              style={{
                backgroundImage:
                  "url('/hero-car.png')"
              }}
            ></div>

            <div className="portfolio-content">

              <span className="portfolio-tag">
                Exotic Supercar
              </span>

              <h3>
                SHADOW STRIKE GT
              </h3>

              <p>
                Aggressive satin-black and toxic green
                performance wrap system designed to
                dominate attention from every angle.
              </p>

              <div className="portfolio-specs">

                <span>Satin Performance Wrap</span>
                <span>Custom Livery System</span>
                <span>Ceramic Protection</span>
                <span>Visual Identity Package</span>

              </div>

              <div className="build-details">

                <div className="detail-row">

                  <span>Platform</span>

                  <strong>
                    Lamborghini Inspired GT
                  </strong>

                </div>

                <div className="detail-row">

                  <span>Finish</span>

                  <strong>
                    Satin Stealth Film
                  </strong>

                </div>

                <div className="detail-row">

                  <span>Protection</span>

                  <strong>
                    Ceramic Shield Coating
                  </strong>

                </div>

                <div className="detail-row">

                  <span>Design Direction</span>

                  <strong>
                    Motorsport Aggression
                  </strong>

                </div>

              </div>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="portfolio-card">

            <div
              className="portfolio-image"
              style={{
                backgroundImage:
                  "url('/wraptor-van.png')"
              }}
            ></div>

            <div className="portfolio-content">

              <span className="portfolio-tag">
                Fleet Branding
              </span>

              <h3>
                APEX FLEET ONE
              </h3>

              <p>
                High-visibility commercial wrap package
                engineered to transform everyday business
                vehicles into rolling brand dominance.
              </p>

              <div className="portfolio-specs">

                <span>Fleet Graphics Package</span>
                <span>Commercial Brand System</span>
                <span>High-Visibility Layout</span>
                <span>Business Identity Wrap</span>

              </div>

              <div className="build-details">

                <div className="detail-row">

                  <span>Vehicle Type</span>

                  <strong>
                    Commercial Transit Van
                  </strong>

                </div>

                <div className="detail-row">

                  <span>Coverage</span>

                  <strong>
                    Full Commercial Wrap
                  </strong>

                </div>

                <div className="detail-row">

                  <span>Brand Focus</span>

                  <strong>
                    High Visibility Marketing
                  </strong>

                </div>

                <div className="detail-row">

                  <span>Visual Style</span>

                  <strong>
                    Modern Corporate Aggression
                  </strong>

                </div>

              </div>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="portfolio-card">

            <div
              className="portfolio-image"
              style={{
                backgroundImage:
                  "url('/wraptor-truck.png')"
              }}
            ></div>

            <div className="portfolio-content">

              <span className="portfolio-tag">
                Performance Truck
              </span>

              <h3>
                ROGUE TITAN
              </h3>

              <p>
                Street-performance inspired wrap concept
                combining aggressive geometry, cinematic
                lighting, and modern motorsports attitude.
              </p>

              <div className="portfolio-specs">

                <span>Street Performance Livery</span>
                <span>Custom Accent Graphics</span>
                <span>Gloss Protection Finish</span>
                <span>Motorsports Styling Package</span>

              </div>

              <div className="build-details">

                <div className="detail-row">

                  <span>Platform</span>

                  <strong>
                    Performance Street Truck
                  </strong>

                </div>

                <div className="detail-row">

                  <span>Finish</span>

                  <strong>
                    Gloss Metallic Package
                  </strong>

                </div>

                <div className="detail-row">

                  <span>Theme</span>

                  <strong>
                    Urban Motorsport Styling
                  </strong>

                </div>

                <div className="detail-row">

                  <span>Visual Tone</span>

                  <strong>
                    Aggressive Street Presence
                  </strong>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          TRANSFORMATION
      ========================= */}

      <section className="section dark">

        <div className="section-title-wrap">

          <p className="impact-small">
            Transformation
          </p>

          <h2>
            BEFORE ORDINARY.
            <span style={{ color: '#a8ff00' }}>
              {' '}AFTER WRAPTOR.
            </span>
          </h2>

        </div>

        <div className="transform-wrap">

          <img
            src="/transform-van.png"
            alt="Wrap Transformation"
            className="transform-image"
          />

        </div>

      </section>

      {/* =========================
          IMPACT
      ========================= */}

      <section className="impact-section">

        <div className="impact-content">

          <p className="impact-small">
            Visibility Creates Opportunity
          </p>

          <h2>
            BE SEEN.
            <span> DOMINATE.</span>
          </h2>

          <p>
            Wraptor Designs creates high-performance
            visual branding systems that stop traffic,
            increase recognition, and elevate perception.
          </p>

        </div>

      </section>

      {/* =========================
          CONTACT
      ========================= */}

      <section
        id="contact"
        className="section dark contact-section"
      >

        <h2>
          Start Your Project
        </h2>

        <p>
          Dennis Sigman
        </p>

        <a
          className="contact-button"
          href="tel:12692779151"
        >
          (269) 277-9151
        </a>

        <div className="email-list">

          <p>
            dennis@wraptordesigns.com
          </p>

          <p>
            orders@wraptordesigns.com
          </p>

          <p>
            info@wraptordesigns.com
          </p>

        </div>

      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="footer-glow"></div>

        <div className="footer-content">

          <div className="footer-brand">

            <img
              src="/wraptor-emblem.png"
              alt="Wraptor Emblem"
              className="footer-logo"
            />

            <h2>
              WRAPTOR
              <span> DESIGNS</span>
            </h2>

            <p>
              Premium wraps, bold branding,
              and cinematic transformations
              engineered to dominate attention.
            </p>

          </div>

          <div className="footer-links">

            <h3>
              Navigate
            </h3>

            <a href="#services">
              Services
            </a>

            <a href="#portfolio">
              Portfolio
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

          <div className="footer-contact">

            <h3>
              Contact
            </h3>

            <p>
              (269) 277-9151
            </p>

            <p>
              dennis@wraptordesigns.com
            </p>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Wraptor Designs — WE BUILD ATTENTION.
          </p>

        </div>

      </footer>

    </div>
  )
}
