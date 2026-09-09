export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jake Slone",
    email: "jake@slone.ca",
    jobTitle: "Fullstack Developer",
    url: "https://www.jakeslone.com",
    description:
      "Fullstack dev at Gigadat. Previously NAIT, Critical Mass.",
    sameAs: [
      "https://www.linkedin.com/in/jakeslone98/",
      "https://github.com/JakeSlone",
      "https://x.com/jslone98",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Gigadat",
      url: "https://gigadatsolutions.com/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="app">
        <div className="container">
          <div className="content">
            <h1>jake slone</h1>
            <p data-nosnippet>
              jake@slone.ca |{" "}
              <a
                href="https://www.linkedin.com/in/jakeslone98/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/JakeSlone"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>{" "}
              |{" "}
              <a
                href="https://x.com/jslone98"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </a>
            </p>
            <p data-nosnippet>fullstack dev</p>
            <h2>experience</h2>
            <p data-nosnippet>
              <a
                href="https://gigadatsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                gigadat
              </a>{" "}
              (2026 - present)
            </p>
            <p data-nosnippet>
              <a
                href="https://nait.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                nait
              </a>{" "}
              (2023 - 2026)
            </p>
            <p data-nosnippet>
              <a
                href="https://criticalmass.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                critical mass
              </a>{" "}
              (2019 - 2023)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
