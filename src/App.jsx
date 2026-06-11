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
              Custom Graphics.
  <br />
  Bold Brands.
  <br />
  Maximum Impact.
            </p>

            <h1>
              WE BUILD
              <span>ATTENTION</span>
            </h1>

            <p className="subtitle">
              Custom graphics, decals, branding,
and vinyl solutions designed to
help YOU get noticed.
            </p>

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
            <span> MAKE GRAPHICS..</span>
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
              {' '}PROJECTS
            </span>
          </h2>

        </div>

        <div className="portfolio-grid">

          {/* CARD 1 */}

          <div className="portfolio-card">

  <div className="portfolio-image">

    <img
      src="/projects/terrain/terrain-hero.jpg"
      alt="GMC Terrain Elevation"
    />

  </div>

  <div className="portfolio-content">

    <span className="portfolio-tag">
      Custom Vehicle Graphics
    </span>

    <h3>
      GMC TERRAIN ELEVATION
    </h3>

    <p>
      A custom graphics package featuring
      Elevation rocker graphics, rear window
      branding, and a complete installation
      process from layout to final application.
    </p>

    <div className="portfolio-specs">

      <span>Elevation Graphics</span>
      <span>Rear Window Graphics</span>
      <span>Custom Layout</span>
      <span>Vehicle Personalization</span>

    </div>

    <div className="build-details">

      <div className="detail-row">
        <span>Vehicle</span>
        <strong>2025 GMC Terrain Elevation</strong>
      </div>

      <div className="detail-row">
        <span>Graphics</span>
        <strong>Custom Vinyl Package</strong>
      </div>

      <div className="detail-row">
        <span>Focus</span>
        <strong>Vehicle Customization</strong>
      </div>

      <div className="detail-row">
        <span>Project Type</span>
        <strong>Personal Vehicle Graphics</strong>
      </div>

    </div>

  </div>

</div>

          {/* CARD 2 */}

          <div className="portfolio-card">

  <div className="portfolio-image">

    <img
      src="/F150/f150-hero.png"
      alt="Wraptor F150"
    />

  </div>

  <div className="portfolio-content">

    <span className="portfolio-tag">
      Business Vehicle Branding
    </span>

    <h3>
      WRAPTOR F150
    </h3>

    <p>
      A fully branded company vehicle featuring
      custom graphics, hood accents, windshield
      branding, and signature Wraptor styling.
    </p>

    <div className="portfolio-specs">

      <span>Vehicle Branding</span>
      <span>Window Graphics</span>
      <span>Custom Graphics</span>
      <span>Brand Identity</span>

    </div>

    <div className="build-details">

      <div className="detail-row">
        <span>Vehicle</span>
        <strong>Ford F150</strong>
      </div>

      <div className="detail-row">
        <span>Graphics</span>
        <strong>Full Branding Package</strong>
      </div>

      <div className="detail-row">
        <span>Purpose</span>
        <strong>Business Promotion</strong>
      </div>

      <div className="detail-row">
        <span>Style</span>
        <strong>Wraptor Signature Design</strong>
      </div>

    </div>

  </div>

</div>

          {/* CARD 3 */}

          <div className="portfolio-card">

            <div className="portfolio-image placeholder-image">

  <h3>Project Images Coming Soon</h3>

</div>

            <div className="portfolio-content">

              <span className="portfolio-tag">
  Storefront Graphics
</span>

<h3>
  BUSINESS FRONTAGE IDENTITY
</h3>

<p>
  Window graphics, business information,
  and branding elements that help customers
  recognize and remember your business.
</p>
              <div className="portfolio-specs">

  <span>Window Lettering</span>
  <span>Business Hours</span>
  <span>Logo Graphics</span>
  <span>Storefront Branding</span>

</div>

              <div className="build-details">

  <div className="detail-row">

    <span>Application</span>

    <strong>
      Storefront Window Graphics
    </strong>

  </div>

  <div className="detail-row">

    <span>Elements</span>

    <strong>
      Logo & Business Information
    </strong>

  </div>

  <div className="detail-row">

    <span>Brand Focus</span>

    <strong>
      Customer Recognition
    </strong>

  </div>

  <div className="detail-row">

    <span>Visual Style</span>

    <strong>
      Professional Business Identity
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
            Business Visibility
          </p>

          <h2>
            STAND OUT.
            <span style={{ color: '#a8ff00' }}>
              {' '}GET NOTICED.
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
              Custom graphics, vehicle lettering, business branding, and vinyl solutions designed to help you stand out and get noticed.
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
