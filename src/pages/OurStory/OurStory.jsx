import { useEffect } from "react";
import aboutData from "../../data/aboutData";
import style from "./OurStory.module.css";
import img from "../../assets/images/img2.jpeg";

function OurStory() {
  // ✅ If this is a single story page
  const pageData = aboutData[0];

  useEffect(() => {
    const sections = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  if (!pageData) {
    return <h2 style={{ textAlign: "center" }}>Page not found</h2>;
  }

  const { hero, intro, birthOfBrand, promise, connect } = pageData;

  return (
    <div className={style.aboutpage}>

      {/* Hero */}
      <section className={style.abouthero}>
        <div className={style.herotext}>
          <h1>{hero.greeting}</h1>
          <h3>{hero.role}</h3>
          <p>{hero.tagline}</p>
        </div>

        <div className={style.heroimage}>
          <img src={img} alt="Founder" />
        </div>
      </section>

      {/* Intro + Birth */}
      <section className={`${style.aboutStoryWrapper} animate`}>
        <div className={style.storyLeft}>
          <h2>My Journey</h2>
          {intro.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        <div className={style.storyRight}>
          <h2>{birthOfBrand.title}</h2>
          {birthOfBrand.points.map((point, index) => (
            <p key={index}>{point}</p>
          ))}
        </div>
      </section>

      {/* Promise */}
      <section className={`${style.aboutPromise} animate`}>
        <h2>{promise.title}</h2>
        {promise.lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </section>

      {/* Connect */}
      <section className={`${style.aboutConnect} animate`}>
        <h2>{connect.title}</h2>
        <p>{connect.text}</p>

        <div className={style.connectOptions}>
          {connect.options.map((opt, index) => (
            <span key={index}>{opt}</span>
          ))}
        </div>

        <p>{connect.closing}</p>

        <a
          href="https://calendly.com/wanderxo/coffee-chats"
          target="_blank"
          rel="noopener noreferrer"
          className={style.connectBtn}
        >
          {connect.buttonText}
        </a>
      </section>

    </div>
  );
}

export default OurStory;
