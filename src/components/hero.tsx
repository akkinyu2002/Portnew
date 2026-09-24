"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "./layout/container";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero__inner">
        <motion.div
          className="hero__kicker"
          initial="hidden"
          animate="visible"
          variants={reveal}
        >
          <span className="hero__kicker-dot" aria-hidden="true" />
          Nepal / Based in curiosity
        </motion.div>

        <div className="hero__main">
          <motion.div initial="hidden" animate="visible" variants={reveal}>
            <p className="hero__overline">Designer / Developer / Creator</p>
            <h1 className="hero__title" id="hero-title">
              <span>Aakash</span>
              <em>Neupane</em>
            </h1>
          </motion.div>

          <motion.div
            className="hero__signal"
            aria-label="A subtle visual representing design, development and exploration"
            initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="hero__signal-ring" aria-hidden="true" />
            <span className="hero__signal-word">design</span>
            <span className="hero__signal-word">build</span>
            <span className="hero__signal-word">explore</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </motion.div>
        </div>

        <div className="hero__footer">
          <p className="hero__role">Designing visuals.<br />Building experiences.</p>
          <p className="hero__description">
            I design visuals, build digital experiences, and explore the intersection of technology, AI and creativity.
          </p>
          <div className="hero__actions">
            <a className="hero__link hero__link--primary" href="#work">
              View work <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="hero__link" href="#about">
              About me <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <a className="hero__scroll" href="#work" aria-label="Scroll to selected work">
            <ArrowDownRight size={22} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
