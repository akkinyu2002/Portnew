import { Section } from "./layout/section";

export function Contact() {
  return (
    <Section className="contact" id="contact" label="06 / Contact">
      <div className="contact__content">
        <p className="contact__eyebrow">Have an idea?</p>
        <h2>Let&apos;s build<br /><em>something.</em></h2>
        <p className="contact__copy">Available for selected design, web and creative technology projects.</p>
        <div className="contact__links" aria-label="Contact details">
          <a className="contact__link" href="mailto:nyupaneaakash@gmail.com">Email Me</a>
          <a className="contact__link" href="https://github.com/akkinyu2002" target="_blank" rel="noreferrer">GitHub</a>
          <a className="contact__link" href="https://www.linkedin.com/in/aakash-nyupane-4bb97031a" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </Section>
  );
}
