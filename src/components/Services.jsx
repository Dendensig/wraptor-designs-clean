export default function Services() {
  return (
    <section className="services">
      <div className="services-header">
        <h2>Services & Packages</h2>
        <p>
          Flexible solutions for personal builds, business fleets, and custom branding projects.
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card featured">
          <h3>Full Vehicle Wrap</h3>
          <p className="price">Custom Quote</p>
          <ul>
            <li>Full color change or branded wrap</li>
            <li>Premium vinyl materials</li>
            <li>Professional installation</li>
            <li>Finish protection options</li>
          </ul>
          <button>Request Quote</button>
        </div>

        <div className="service-card">
          <h3>Commercial Fleet Branding</h3>
          <p className="price">Volume Pricing</p>
          <ul>
            <li>Multi-vehicle branding consistency</li>
            <li>Logo + layout adaptation</li>
            <li>On-site coordination available</li>
            <li>Scalable production</li>
          </ul>
          <button>Get Estimate</button>
        </div>

        <div className="service-card">
          <h3>Partial Wrap / Accents</h3>
          <p className="price">Starting Point Option</p>
          <ul>
            <li>Hood, roof, or trim accents</li>
            <li>Custom styling upgrades</li>
            <li>Budget-friendly transformation</li>
            <li>Fast turnaround options</li>
          </ul>
          <button>Explore Options</button>
        </div>

        <div className="service-card">
          <h3>Design & Graphics</h3>
          <p className="price">Design Only</p>
          <ul>
            <li>Custom wrap design creation</li>
            <li>Mockups before install</li>
            <li>Brand identity support</li>
            <li>Print-ready files</li>
          </ul>
          <button>Start Design</button>
        </div>
      </div>
    </section>
  );
}
