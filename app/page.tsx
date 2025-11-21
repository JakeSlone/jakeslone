export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jake Slone",
    email: "jake@slone.ca",
    jobTitle: "Fullstack Developer",
    url: "https://www.jakeslone.com",
    sameAs: [
      "https://www.linkedin.com/in/jakeslone98/",
      "https://github.com/JakeSlone",
      "https://x.com/jslone98",
    ],
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
            <h2>sites</h2>
            <p data-nosnippet>
              <a
                href="https://slone.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                slone
              </a>{" "}
              - my freelance design studio. since 2019 i've built sites for a
              variety of clients.
            </p>
            <p data-nosnippet>
              <a
                href="https://bxsite.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                bxsite
              </a>{" "}
              - the fastest and easiest way to build a website.
            </p>
            <h2>experience</h2>
            <p data-nosnippet>
              <a
                href="https://nait.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                nait
              </a>{" "}
              (2023 - present) - led redesign of frontend and api for revamp of
              nait.ca. converted to modern architecture that improved
              performance and reliability.
            </p>
            <p data-nosnippet>
              <a
                href="https://criticalmass.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                critical mass
              </a>{" "}
              (2019 - 2023) - worked primarily on the nissan/infiniti account.
              maintained legacy cms and worked on many different campaigns and
              projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
