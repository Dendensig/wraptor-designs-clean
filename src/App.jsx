export default function App() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">WRAPTOR DESIGNS</div>

        <nav>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">Michigan Premium Vinyl Graphics</p>

          <h1>
            WRAPTOR
            <span>DESIGNS</span>
          </h1>

          <p className="subtitle">
            Aggressive branding, premium wraps, motorsports styling,
            commercial graphics, and visual identity systems designed
            to dominate attention.
          </p>

          <div className="hero-buttons">
            <a href="#services">Explore Services</a>
            <a href="#contact">Start Your Project</a>
          </div>
        </div>
      </section>

      <section id="services" className="section dark">
        <h2>Services</h2>

        <div className="card-grid">
          <div className="service-card">
            <h3>Vehicle Wraps</h3>
            <p>
              Full and partial wraps engineered for maximum visual impact.
            </p>
          </div>

          <div className="service-card">
            <h3>Fleet Branding</h3>
            <p>
              Turn company vehicles into high-visibility rolling advertisements.
            </p>
          </div>

          <div className="service-card">
            <h3>Storefront Graphics</h3>
            <p>
              Bold vinyl graphics and window treatments built to stand out.
            </p>
          </div>

          <div className="service-card">
            <h3>Motorsports Design</h3>
            <p>
              Race-inspired liveries and sponsor graphics with aggressive styling.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <h2>Featured Work</h2>

        <div className="gallery-grid">
          <div className="gallery-card"></div>
          <div className="gallery-card"></div>
          <div className="gallery-card"></div>
        </div>
      </section>

      <section id="contact" className="section dark contact-section">
        <h2>Start Your Wrap Project</h2>

        <p>Dennis Sigman</p>

        <a className="contact-button" href="tel:12692779151">
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
