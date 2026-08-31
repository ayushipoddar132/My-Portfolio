import React, { useState } from "react";

const BASE = import.meta.env.BASE_URL;

const A = ({ href, children, ...rest }) => (
  <a href={href} {...rest}>
    {children}
  </a>
);

const projects = [
  {
    number: "01",
    category: "NAIL STUDIO WEBSITE",
    title: "Artistry Nail Studio Sample",
    description:
      "A premium nail studio website concept built around elegant visuals, clear service discovery and a simple path from browsing to booking.",
    tags: ["NAIL STUDIO", "BOOKING UI", "RESPONSIVE"],

    preview: "artistry",
    previewLabel: "ARTISTRY NAIL STUDIO",
    previewHeading: "Nails, made to be noticed.",

    liveUrl: "https://nimble-licorice-730989.netlify.app/",

    screenshots: [
  `${BASE}projects/artistry-1.png`,
  `${BASE}projects/artistry-2.png`,
  `${BASE}projects/artistry-3.png`,
  `${BASE}projects/artistry-4.png`,
  `${BASE}projects/artistry-5.png`,
  `${BASE}projects/artistry-6.png`,
  `${BASE}projects/artistry-7.png`,
  `${BASE}projects/artistry-8.png`,
  `${BASE}projects/artistry-9.png`,
],
  },

  {
    number: "02",
    category: "PRODUCT EXPERIENCE",
    title: "AI Resume Analyzer",
    description:
      "A focused web product that turns a complex AI workflow into a clear upload, analysis and feedback experience.",
    tags: ["AI WORKFLOW", "FULL-STACK", "PRODUCT UI"],

    preview: "resume",
    previewLabel: "AI RESUME ANALYZER",
    previewHeading: "Make every application stronger.",

    liveUrl: "",

    screenshots: [
      `${BASE}projects/resume-1.png`,
      `${BASE}projects/resume-2.png`,
      `${BASE}projects/resume-3.png`,
      `${BASE}projects/resume-4.png`,
      `${BASE}projects/resume-5.png`,
      `${BASE}projects/resume-6.png`,
      `${BASE}projects/resume-7.png`,
    ],
  },

  {
    number: "03",
    category: "E-COMMERCE CONCEPT",
    title: "The Nails Tale",
    description:
      "A beauty brand experience shaped around strong visuals, simple product discovery and a clear path from browsing to enquiry.",
    tags: ["BRAND WEBSITE", "PRODUCT CATALOGUE", "RESPONSIVE UI"],

    preview: "nails",
    previewLabel: "THE NAILS TALE",
    previewHeading: "Colour made personal.",

    liveUrl: "",

    screenshots: [
      `${BASE}projects/nails-1.png`,
      `${BASE}projects/nails-2.png`,
      `${BASE}projects/nails-3.png`,
      `${BASE}projects/nails-4.png`,
      `${BASE}projects/nails-5.png`,
    ],
  },

  {
    number: "04",
    category: "HEALTHCARE WEBSITE",
    title: "Clinic Sample",
    description:
      "A clean healthcare website concept designed to present services and essential information clearly while making appointment enquiries simple.",
    tags: ["CLINIC WEBSITE", "APPOINTMENTS", "MOBILE-FIRST"],

    preview: "clinic",
    previewLabel: "CLINIC",
    previewHeading: "Care, made easier to access.",

    liveUrl: "",

    screenshots: [
      `${BASE}projects/clinic-1.png`,
      `${BASE}projects/clinic-2.png`,
      `${BASE}projects/clinic-3.png`,
    ],
  },

  {
    number: "05",
    category: "SALON WEBSITE",
    title: "Unisex Salon",
    description:
      "A modern salon website concept built around premium presentation, service discovery and a straightforward customer booking journey.",
    tags: ["UNISEX SALON", "SERVICES", "BOOKING EXPERIENCE"],

    preview: "salon",
    previewLabel: "UNISEX SALON",
    previewHeading: "Your next look starts here.",

    liveUrl: "https://glowing-macaron-d034cb.netlify.app/",

    screenshots: [
      `${BASE}projects/salon-1.png`,
      `${BASE}projects/salon-2.png`,
      `${BASE}projects/salon-3.png`,
      `${BASE}projects/salon-4.png`,
      `${BASE}projects/salon-5.png`,
    ],
  },
];

export default function App() {
  const [gallery, setGallery] = useState(null);

  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-topline">

          <A
            className="brand-mark"
            href="#home"
            aria-label="Ayushi Poddar home"
          >
            AP<span>°</span>
          </A>

          <p>
            Independent web designer &amp; developer
          </p>

          <p>
            Bengaluru, India
          </p>

        </div>


        <div
          className="hero-name"
          aria-label="Ayushi Poddar"
        >

          <span>AYUSHI</span>

          <span>PODDAR</span>

        </div>


        <div className="hero-grid">

          <div className="hero-copy">

            <p className="eyebrow">

              <span></span>

              Websites built to do business

            </p>


            <h1>

              Look premium.

              <br />

              Work <em>harder.</em>

            </h1>


            <p className="hero-intro">

              I design and develop clear, modern websites that help
              businesses build trust, get discovered and turn visitors
              into customers.

            </p>


            <div className="hero-actions">

              <A
                className="button button-dark"
                href="#contact"
              >

                Start a project

                <span aria-hidden="true">
                  ↗
                </span>

              </A>


              <A
                className="text-link"
                href="#work"
              >

                View selected work

                <span aria-hidden="true">
                  ↓
                </span>

              </A>

            </div>

          </div>


          <div
            className="hero-visual"
            aria-hidden="true"
          >

            <div className="browser-card browser-card-back">

              <div className="browser-bar">

                <i></i>
                <i></i>
                <i></i>

              </div>


              <div className="mini-dashboard">

                <span></span>
                <span></span>
                <span></span>

              </div>

            </div>


            <div className="browser-card browser-card-front">

              <div className="browser-bar">

                <i></i>
                <i></i>
                <i></i>

                <b>
                  yourbusiness.com
                </b>

              </div>


              <div className="site-preview">

                <small>
                  YOUR BUSINESS
                </small>


                <div className="preview-nav">

                  <span></span>
                  <span></span>
                  <span></span>

                </div>


                <strong>
                  A website your customers remember.
                </strong>


                <p>
                  Clear offer. Strong proof. Easy next step.
                </p>


                <button
                  type="button"
                  tabIndex="-1"
                >
                  BOOK NOW ↗
                </button>

              </div>

            </div>


            <div className="result-badge">

              <span>
                BUILT FOR
              </span>

              <strong>
                TRUST + ACTION
              </strong>

            </div>

          </div>

        </div>


        <div className="availability">

          <span className="status-dot"></span>

          Available for select website projects

        </div>

      </section>


      {/* ================= STRIP ================= */}

      <div className="capability-strip">

        <div>

          <span>STRATEGY</span>
          <i>✦</i>

          <span>DESIGN</span>
          <i>✦</i>

          <span>DEVELOPMENT</span>
          <i>✦</i>

          <span>LAUNCH</span>
          <i>✦</i>

          <span>STRATEGY</span>
          <i>✦</i>

          <span>DESIGN</span>
          <i>✦</i>

          <span>DEVELOPMENT</span>
          <i>✦</i>

          <span>LAUNCH</span>

        </div>

      </div>


      {/* ================= SERVICES ================= */}

      <section
        className="section services-section"
        id="services"
      >

        <div className="section-heading">

          <p className="eyebrow">

            <span></span>

            Services

          </p>


          <h2>
            What I can build for your business.
          </h2>


          <p>

            From a sharp first website to a custom booking or product
            experience, every build is shaped around a real business goal.

          </p>

        </div>


        <div className="service-list">

          {[
            [
              "01",
              "Business websites",
              "A polished online home for your brand, built to explain your value quickly and turn visits into enquiries.",
              "Clinics · salons · consultants · local businesses",
            ],

            [
              "02",
              "Booking & enquiry websites",
              "Service listings, appointment requests and focused contact journeys that make it easier for customers to take action.",
              "Appointments · lead forms · WhatsApp journeys",
            ],

            [
              "03",
              "Catalogues & storefronts",
              "Product-led websites that organise what you sell, create trust and guide customers from discovery to purchase or enquiry.",
              "Product catalogues · carts · payment integrations",
            ],

            [
              "04",
              "Custom web apps",
              "Dashboards and tailored digital tools for businesses that need more than a standard marketing website.",
              "Admin panels · trackers · custom workflows",
            ],

          ].map(([n, t, p, s]) => (

            <article
              className="service-row"
              key={n}
            >

              <p className="service-number">
                ({n})
              </p>


              <h3>
                {t}
              </h3>


              <div>

                <p>
                  {p}
                </p>

                <small>
                  {s}
                </small>

              </div>


              <span className="round-arrow">
                ↗
              </span>

            </article>

          ))}

        </div>

      </section>


      {/* ================= WORK ================= */}

      <section
        className="section work-section"
        id="work"
      >

        <div className="section-heading work-heading">

          <p className="eyebrow">

            <span></span>

            Selected work

          </p>


          <h2>
            Ideas turned into working digital experiences.
          </h2>


          <p>

            A selection of concept and product projects that show how I approach
            visual design, interaction and development.

          </p>

        </div>


        <div className="project-list">

          {projects.map((project) => (

            <ProjectCard

              key={project.number}

              project={project}

              onScreenshots={() =>
                setGallery(project)
              }

            />

          ))}

        </div>

      </section>


      {/* ================= PROCESS ================= */}

      <section
        className="section process-section"
        id="process"
      >

        <div className="section-heading process-heading">

          <p className="eyebrow">

            <span></span>

            The process

          </p>


          <h2>
            Clear from first conversation to launch.
          </h2>


          <p>

            No mystery and no bloated process—just the right questions,
            a defined scope and steady progress you can see.

          </p>

        </div>


        <div className="process-grid">

          <article>

            <span>
              01
            </span>

            <h3>
              Understand
            </h3>

            <p>

              Your business, customers, goals and the actions your
              website should drive.

            </p>

          </article>


          <article>

            <span>
              02
            </span>

            <h3>
              Plan
            </h3>

            <p>

              The pages, content, features and project scope—made clear
              before the build begins.

            </p>

          </article>


          <article>

            <span>
              03
            </span>

            <h3>
              Design &amp; build
            </h3>

            <p>

              A responsive website with a distinct visual direction and
              purposeful user journey.

            </p>

          </article>


          <article>

            <span>
              04
            </span>

            <h3>
              Launch &amp; handover
            </h3>

            <p>

              Final testing, deployment and a simple handover so you know
              how everything works.

            </p>

          </article>

        </div>

      </section>


      {/* ================= INCLUDED ================= */}

      <section className="section included-section">

        <div className="included-copy">

          <p className="eyebrow">

            <span></span>

            Built in, not added later

          </p>


          <h2>
            Good design is only useful when it performs.
          </h2>


          <p>

            Each project starts with the essentials that make a modern business
            website credible, usable and ready to grow.

          </p>

        </div>


        <div className="included-list">

          {[
            "Mobile-first design",
            "Clear calls to action",
            "Fast, accessible pages",
            "SEO-ready foundations",
            "Analytics-ready setup",
            "Post-launch handover",

          ].map((item, i) => (

            <div key={item}>

              <span>
                0{i + 1}
              </span>

              <p>
                {item}
              </p>

              <i>
                ✓
              </i>

            </div>

          ))}

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-kicker">

          <span>
            HAVE A BUSINESS?
          </span>

          <span>
            LET’S GIVE IT THE RIGHT WEBSITE.
          </span>

        </div>


        <div className="contact-main">

          <div>

            <p className="eyebrow eyebrow-light">

              <span></span>

              New project enquiry

            </p>


            <h2>
              Let's build something customers trust.
            </h2>

          </div>


          <div className="contact-copy">

            <p>

              Share what your business does, the pages or features you need and
              your ideal timeline. I'll help turn it into a clear scope and
              quote.

            </p>


            <A
              className="button button-light"
              href="https://github.com/ayushipoddar132"
              target="_blank"
              rel="noreferrer"
            >

              View GitHub &amp; connect

              <span aria-hidden="true">
                ↗
              </span>

            </A>


            <div className="contact-details">

              <a
                href="https://wa.me/917368918840"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: 7368918840
              </a>


              <a href="mailto:ayushipoddar132@gmail.com">

                Email: ayushipoddar132@gmail.com

              </a>


              <div className="social-links">

                <a
                  href="https://x.com/ayushii_1209"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter X"
                  className="social-icon"
                >

                  <svg viewBox="0 0 24 24">

                    <path d="M18.244 2H21.552L14.325 10.26L22.827 22H16.17L10.956 15.183L4.99 22H1.68L9.418 13.155L1.254 2H8.08L12.793 8.231L18.244 2ZM17.083 19.932H18.916L7.084 3.96H5.117L17.083 19.932Z" />

                  </svg>

                </a>


                <a
                  href="https://www.linkedin.com/in/ayushi-poddar-26472b373/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon"
                >

                  <svg viewBox="0 0 24 24">

                    <path d="M6.94 8.5V21H2.78V8.5H6.94ZM4.86 2.28C6.19 2.28 7.28 3.37 7.28 4.7C7.28 6.03 6.19 7.12 4.86 7.12C3.53 7.12 2.44 6.03 2.44 4.7C2.44 3.37 3.53 2.28 4.86 2.28ZM9.22 8.5H13.2V10.21H13.26C13.81 9.16 15.17 8.05 17.19 8.05C21.39 8.05 22.17 10.82 22.17 14.42V21H18.02V15.17C18.02 13.78 18 11.99 16.08 11.99C14.14 11.99 13.84 13.5 13.84 15.07V21H9.68V8.5H9.22Z" />

                  </svg>

                </a>

              </div>

            </div>

          </div>

        </div>


        <div className="contact-footer">

          <p>
            Ayushi Poddar
          </p>

          <p>
            Website design &amp; development
          </p>

          <A href="#home">
            Back to top ↑
          </A>

        </div>

      </section>


      {/* ================= FLOATING NAV ================= */}

      <nav className="floating-nav">

        <A
          className="nav-monogram"
          href="#home"
        >
          AP
        </A>


        <div>

          <A href="#services">
            Services
          </A>

          <A href="#work">
            Work
          </A>

          <A href="#process">
            Process
          </A>

        </div>


        <A
          className="nav-contact"
          href="#contact"
        >

          Let's talk

          <span>
            ↗
          </span>

        </A>

      </nav>


      {/* ================= SCREENSHOTS ================= */}

      {gallery && (

        <ScreenshotGallery
          project={gallery}
          onClose={() =>
            setGallery(null)
          }
        />

      )}

    </main>
  );
}


function ProjectCard({
  project,
  onScreenshots,
}) {

  return (

    <article className="project-card">

      <ProjectPreview
        project={project}
      />


      <div className="project-content">

        <div className="project-meta">

          <span>
            ({project.number})
          </span>

          <span>
            {project.category}
          </span>

        </div>


        <h3>
          {project.title}
        </h3>


        <p>
          {project.description}
        </p>


        <div className="tag-list">

          {project.tags.map((tag) => (

            <span key={tag}>
              {tag}
            </span>

          ))}

        </div>


        <div className="project-links">

          {project.liveUrl ? (

            <A
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >

              View live demo ↗

            </A>

          ) : (

            <button
              className="project-action-disabled"
              disabled
            >

              View live demo ↗

            </button>

          )}


          <button
            type="button"
            onClick={onScreenshots}
          >

            View screenshots ↗

          </button>

        </div>

      </div>

    </article>

  );
}


function ProjectPreview({
  project,
}) {

  return (

    <div
      className={`project-preview ${project.preview}`}
      aria-hidden="true"
    >

      <div className="project-browser">

        <div className="browser-bar">

          <i></i>
          <i></i>
          <i></i>

          <b>
            {project.previewLabel}
          </b>

        </div>


        <div
          className={`project-ui ${project.preview}-ui`}
        >

          <small>
            {project.previewLabel}
          </small>


          <strong>
            {project.previewHeading}
          </strong>


          {project.preview === "artistry" && (

            <div className="artistry-detail">

              <span>
                MANICURE
              </span>

              <span>
                NAIL ART
              </span>

              <span>
                EXTENSIONS
              </span>

            </div>

          )}


          {project.preview === "resume" && (

            <>

              <div className="score-ring">
                86
              </div>

              <span className="score-line"></span>

              <span className="score-line short"></span>

            </>

          )}


          {project.preview === "nails" && (

            <div className="nail-colours">

              <span></span>
              <span></span>
              <span></span>

            </div>

          )}


          {project.preview === "clinic" && (

            <div className="clinic-detail">

              <span>
                APPOINTMENTS
              </span>

              <span>
                DOCTORS
              </span>

            </div>

          )}


          {project.preview === "salon" && (

            <div className="salon-detail">

              <span>
                HAIR
              </span>

              <span>
                BEAUTY
              </span>

              <span>
                STYLE
              </span>

            </div>

          )}

        </div>

      </div>

    </div>

  );
}


function ScreenshotGallery({
  project,
  onClose,
}) {

  return (

    <div
      className="gallery-overlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >

      <div
        className="gallery-window"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <div className="gallery-header">

          <div>

            <small>
              PROJECT SCREENSHOTS
            </small>

            <h3>
              {project.title}
            </h3>

          </div>


          <button
            type="button"
            className="gallery-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>

        </div>


        <div className="gallery-images">

          {project.screenshots.map(
            (image, index) => (

              <img
                key={image}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
              />

            )
          )}

        </div>

      </div>

    </div>

  );
}