import Image from "next/image";
import { Section } from "./layout/section";

export function About() {
  return (
    <Section className="about" id="about" label="03 / About">
      <div className="about__grid">
        <div className="about__portrait">
          <Image
            src="/aakash-neupane.jpg"
            alt="Aakash Neupane outdoors in a suit"
            fill
            sizes="(max-width: 48rem) 73vw, (max-width: 64rem) 40vw, 36vw"
            priority={false}
          />
          <small>portrait / Aakash Neupane</small>
        </div>
        <div className="about__copy">
          <h2>A little<br /><em>about me.</em></h2>
          <p>I&apos;m Aakash, a BSc CSIT student from Nepal interested in both design and technology. I work across visual design, web development, video and emerging technologies.</p>
          <p>I enjoy taking ideas from a rough concept to something people can actually see, use and interact with.</p>
          <div className="about__details">
            <div><span>Currently</span><strong>Learning by making</strong></div>
            <div><span>Location</span><strong>Nepal</strong></div>
          </div>
        </div>
      </div>
    </Section>
  );
}
