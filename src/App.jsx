export default function App() {
  return (
    <div>

      <header className="navbar">
        <div className="logo">
          WRAPTOR DESIGNS
        </div>

        <nav>
          <a href="#services">Services</a>
          <a href="#transformations">Transformations</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">

        <div className="overlay"></div>

        <div className="hero-content">

          <p className="eyebrow">
            Premium Vinyl Wraps & Brand Transformations
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

            <a href="#services">
              Explore Services
            </a>
          </div>

        </div>
      </section>

      <section id="services" className="section dark">

        <h2>
          What We Transform
        </h2>

        <div className="card-grid">

          <div className="service-card">
            <h3>Vehicle Wraps</h3>

            <p>
              Full and partial wraps designed to create unforgettable road presence.
            </p>
          </div>

          <div className="service-card">
            <h3>Commercial Branding</h3>

            <p>
              Fleet and business graphics built to generate visibility and authority.
            </p>
          </div>

          <div className="service-card">
            <h3>Storefront Graphics</h3>

            <p>
              Bold visual installations that transform physical locations into brand statements.
            </p>
          </div>

          <div className="service-card">
            <h3>Motorsports Design</h3>

            <p>
              Race-inspired liveries and aggressive visual systems engineered for impact.
            </p>
          </div>

        </div>
      </section>

      <section id="transformations" className="section">

        <h2>
          Featured Transformations
        </h2>

        <div className="gallery-grid">

          <div className="gallery-card"></div>

          <div className="gallery-card"></div>

          <div className="gallery-card"></div>

        </div>
      </section>

      <section className="impact-section">

        <div className="impact-overlay"></div>

        <div className="impact-content">

          <p className="impact-small">
            Visibility Creates Opportunity
          </p>

          <h2>
            Your Brand Deserves
            <span> More Attention</span>
          </h2>

          <p>
            Wraptor Designs creates high-performance visual branding
            systems that stop traffic, increase recognition,
            and elevate perception.
          </p>

        </div>

      </section>

      <section id="contact" className="section dark contact-section">

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
