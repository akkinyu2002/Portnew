import type { HTMLAttributes } from "react";
import { Container } from "./container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  label?: string;
};

export function Section({ children, className = "", label, ...props }: SectionProps) {
  return (
    <section className={`layout-section ${className}`.trim()} {...props}>
      <Container>
        {label ? <p className="section-label">{label}</p> : null}
        {children}
      </Container>
    </section>
  );
}
