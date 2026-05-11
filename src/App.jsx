export default function App() {
  return (
    <div>
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">Michigan Premium Vinyl Graphics</p>

          <h1>
            WRAPTOR
            <span>DESIGNS</span>
          </h1>

          <p className="subtitle">
            High-impact vehicle wraps, commercial graphics, storefront vinyl,
            motorsports branding, and custom visual identity solutions.
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
              Full and partial wraps designed to dominate attention on the road.
            </p>
          </div>

          <div className="service-card">
            <h3>Fleet Graphics</h3>
            <p>
              Commercial branding solutions that turn work vehicles into rolling advertisements.
            </p>
          </div>

          <div className="service-card">
            <h3>Storefront Vinyl</h3>
            <p>
              Window graphics, decals, and storefront branding with aggressive visual appeal.
            </p>
          </div>

          <div className="service-card">
            <h3>Motorsports Graphics</h3>
            <p>
              Race-inspired liveries and sponsor layouts engineered for visibility.
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
        <h2>Contact Wraptor Designs</h2>

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
