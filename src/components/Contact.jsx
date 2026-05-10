
export default function Contact() {
  return (
    <section className="section dark">
      <h2>Get a Quote</h2>

      <form className="form">
        <input placeholder="Name" />
        <input placeholder="Email or Phone" />
        <textarea placeholder="Tell us about your project" />
        <button type="submit">Send Request</button>
      </form>
    </section>
  );
}
