export default function App() {
  return (
    <div>

      <header className="navbar">

        <div className="logo-wrap">

          <div className="logo-icon">
            R
          </div>

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
          <a href="#services">Services</a>
          <a href="#transformations">Transformations</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="quote-button" href="#contact">
          Start Your Project
        </a>

      </header>

      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-grid">

          <div className="hero-left">

            <p className="eyebrow">
              Premium Wraps. Bold Brands. Maximum Impact.
            </p>

            <h1>
              WE WRAP
              <span>ATTENTION</span>
            </h1>

            <p className="subtitle">
              Wraptor Designs transforms vehicles, storefronts,
              fleets, and brands into high-impact visual experiences
              engineered to dominate attention.
            </p>

            <div className="hero-buttons">

              <a href="#contact">
                Start Your Transformation
              </a>

              <a
                href="#transformations"
                className="secondary-button"
              >
                View Our Work
              </a>

            </div>

          </div>

          <div className="hero-right">

            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
              alt="Wraptor Supercar"
            />

          </div>

        </div>

      </section>

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
              Vehicle Wraps
            </h3>

            <p>
              Full and partial wraps designed to create unforgettable road presence.
            </p>

          </div>

          <div className="service-card">

            <h3>
              Fleet Branding
            </h3>

            <p>
              Fleet and business graphics built to generate visibility and authority.
            </p>

          </div>

          <div className="service-card">

            <h3>
              Storefront Graphics
            </h3>

            <p>
              Bold visual installations that transform physical locations into brand statements.
            </p>

          </div>

          <div className="service-card">

            <h3>
              Motorsports Design
            </h3>

            <p>
              Race-inspired liveries and aggressive visual systems engineered for impact.
            </p>

          </div>

        </div>

      </section>

      <section
        id="transformations"
        className="section transformations-section"
      >

        <div className="section-title-wrap">

          <h2>
            Featured Transformations
          </h2>

        </div>

        <div className="gallery-grid">

          <div className="gallery-card gallery-1"></div>

          <div className="gallery-card gallery-2"></div>

          <div className="gallery-card gallery-3"></div>

        </div>

      </section>

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
            Wraptor Designs creates high-performance visual branding
            systems that stop traffic, increase recognition,
            and elevate perception.
          </p>

        </div>

      </section>

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

          <p>dennis@wraptordesigns.com</p>

          <p>orders@wraptordesigns.com</p>

          <p>info@wraptordesigns.com</p>

        </div>

      </section>

    </div>
  )
}
