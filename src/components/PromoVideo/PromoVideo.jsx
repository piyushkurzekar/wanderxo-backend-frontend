import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./PromoVideo.module.css";

const PromoVideo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power3.out" }
    });

    /* ---------------- SCENE 1 – STRONG HOOK (IMPROVED) ---------------- */
tl.add("scene1")

  // Show scene container
  .to(".scene1", { opacity: 1, duration: 0.1 })

  // BUILDING → scale from 0 to 1
  .from(".scene1 .building", {
    opacity: 0,
    duration: .6,
    ease: "back.out(1.7)"
  })

  // DIGITAL EXPERIENCES → typing animation
  .fromTo(".scene1 .typing",
  { clipPath: "inset(0 100% 0 0)" },
  {
    clipPath: "inset(0 0% 0 0)",
    duration: 2,
    ease: "steps(19)"
  }
)

  // THAT MATTERS → normal fade in
  .from(".scene1 .matters", {
    opacity: 0,
    y: 20,
    duration: 0.8
  })

  // HOLD
  .to(".scene1", { opacity: 1, duration: 1.4 })

  // EXIT
  .to(".scene1", {
    opacity: 0,
    y: -40,
    duration: 1
  });

    /* ---------------- SCENE 2 (4–8s) ---------------- */
    tl.add("scene2", "scene1+=4")
      .fromTo(".scene2",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2 }
      )
      .from(".scene2 span",
        { opacity: 0, y: 20, duration: 0.8 },
        "<+=0.3"
      )
      .to(".scene2",
        { opacity: 0, scale: 1.05, duration: 0.8 },
        "scene2+=3.2"
      );

    /* ---------------- SCENE 3 – WHAT YOU DO (8–18s) ---------------- */
tl.add("scene3", ">")

  // Fade scene container IN (CRITICAL)
  .to(".scene3", {
    opacity: 1,
    duration: 0.1
  })

  // Animate services one-by-one
  .from(".scene3 .service", {
    opacity: 0,
    y: 30,
    stagger: 2.5,
    duration: 1
  })

  // HOLD (all services visible)
  .to(".scene3", {
    opacity: 1,
    duration: 1.5
  })

  // EXIT
  .to(".scene3", {
    opacity: 0,
    duration: 1
  });


   /* ---------------- SCENE 4 (18–28s) ---------------- */
tl.add("scene4", ">")

  // fade scene container IN
  .to(".scene4", {
    opacity: 1,
    duration: 0.1
  })

  .from(".scene4 .icons div", {
    opacity: 0,
    scale: 0.6,
    stagger: 0.25,
    duration: 0.9
  })

  .from(".scene4 h1", {
    opacity: 0,
    y: 30,
    duration: 1
  }, "<+=0.3")

  .from(".scene4 p", {
    opacity: 0,
    y: 20,
    duration: 0.8
  }, "<+=0.4")

  // HOLD
  .to(".scene4", { opacity: 1, duration: 2 })

  // EXIT
  .to(".scene4", {
    opacity: 0,
    duration: 1
  });


   /* ---------------- SCENE 5 (28–35s) ---------------- */
tl.add("scene5", ">")

  // fade scene container IN
  .to(".scene5", {
    opacity: 1,
    duration: 0.1
  })

  .from(".scene5 .flow div", {
    opacity: 0,
    x: -60,
    stagger: 0.35,
    duration: 0.9
  })

  .from(".scene5 h1", {
    opacity: 0,
    y: 20,
    duration: 1
  }, "<+=0.4")

  // HOLD
  .to(".scene5", { opacity: 1, duration: 1.8 })

  // EXIT
  .to(".scene5", {
    opacity: 0,
    duration: 1
  });


    /* ---------------- SCENE 6 (35–45s) ---------------- */
    tl.add("scene6", "scene5+=7")
      .fromTo(".scene6",
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 1.6, ease: "power4.out" }
      )
      .from(".scene6 button",
        { opacity: 0, y: 30, duration: 0.8 },
        "<+=0.6"
      )
      .to(".scene6",
        { opacity: 0, duration: 1.4 },
        "scene6+=8"
      );

  }, containerRef);

  return () => ctx.revert();
}, []);


  return (
    <section className={styles.wrapper} ref={containerRef}>
      <div className={styles.bgGlow} />
      <div className={styles.grid} />

     {/* Scene 1 */}
<div className={`${styles.scene} scene1`}>
  <h1 className={styles.scene1LineSmall}>
    <span className="building">Building</span>
  </h1>

  <h1 className={styles.scene1LineBig}>
    <span className="typing">Digital Experiences</span>
  </h1>

  <h1 className={styles.scene1LineSmall}>
    <span className="matters">That Matters</span>
  </h1>
</div>


      {/* Scene 2 */}
      <div className={`${styles.scene} scene2`}>
        <h1>ORIGiN Platforms Pvt Ltd</h1>
        <span>Innovating Digital Solutions</span>
      </div>

      {/* Scene 3 */}
      <div className={`${styles.scene} scene3`}>
        {[
          "Web Development",
          "Mobile App Development",
          "UI / UX Design",
          "Custom Software Solutions"
        ].map((s, i) => (
          <div className="service" key={i}>{s}</div>
        ))}
      </div>

      {/* Scene 4 */}
      <div className={`${styles.scene} scene4`}>
        <div className="icons">
          <div>⚡</div>
          <div>🔒</div>
          <div>📈</div>
        </div>
        <h1>Scalable • Secure • Performance Driven</h1>
        <p>Designed for Growth</p>
      </div>

      {/* Scene 5 */}
      <div className={`${styles.scene} scene5`}>
        <div className="flow">
          <div>Startup</div>
          <div>Growing Business</div>
          <div>Enterprise</div>
        </div>
        <h1>Empowering Startups & Enterprises<br />With Smart Technology</h1>
      </div>

      {/* Scene 6 */}
      <div className={`${styles.scene} scene6`}>
        <h1>Let’s Build Something Exceptional</h1>
        <p>ORIGiN Platforms Pvt Ltd</p>
        <button>Web • App • Software</button>
      </div>
    </section>
  );
};

export default PromoVideo;
