export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <h2>Featured Work</h2>
        <p>
          A selection of recent transformations across personal builds,
          commercial fleets, and custom projects.
        </p>
      </div>

      <div className="portfolio-grid">
        <div className="portfolio-item large">
          <div className="image-placeholder">Before / After: Full Wrap</div>
          <div className="overlay">
            <h3>Full Vehicle Transformation</h3>
            <p>Color change wrap + finish protection</p>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image-placeholder">Fleet Branding</div>
          <div className="overlay">
            <h3>Commercial Fleet</h3>
            <p>Brand consistency across 12 vehicles</p>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image-placeholder">Custom Graphics</div>
          <div className="overlay">
            <h3>Custom Design Work</h3>
            <p>One-off performance styling</p>
          </div>
        </div>

        <div className="portfolio-item wide">
          <div className="image-placeholder">Partial Wrap Accent</div>
          <div className="overlay">
            <h3>Accent Package</h3>
            <p>Clean detail enhancement package</p>
          </div>
        </div>
      </div>
    </section>
  );
}
