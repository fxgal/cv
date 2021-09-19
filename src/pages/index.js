import * as React from "react"

import Layout from "../components/layout"
import Section from "../components/Section/Section"
import Seo from "../components/seo"

const IndexPage = () => {
  const profile =
    "Able to apply and develop the appropriate tools for the automated processing of information based on knowledge in areas such as: systems, computing, basic, organizational and administrative sciences. Solid knowledge in software and hardware tools, in addition to having a high ethical value in the handling of information."
  const languages = ["Español", "Inglés básico"]
  const aptitudes = [
    "Responsibility",
    "Efficient communication",
    "Decision making",
    "Observation and analysis",
    "Planning and modeling",
    "Creativity",
    "Teamwork",
    "I work under pressure",
    "Quick adaptation to languages and technologies",
  ]

  const skills = [
    "Full stack web developer",
    "Architectures and development patterns",
    "Agile methodologies",
    "Microservices modeling",
    "Modeling SQL and NoSQL databases",
    "Information systems",
    "Frameworks and web libraries",
    "Hybrid Mobile Applications",
    "Realtime and websockets",
    "Rest of API",
    "Repositories and version control",
  ]

  return (
    <>
      <Seo title="Profile" />
      <Layout>
        <div className="container-fluid" id="profile-page">
          <div className="row">
            <div className="title col-12">
              <h1 className="header-title">Félix Galindo</h1>
              <h2 className="header-subtitle">Web Developer Full Stack</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>
                  <i className="fas fa-user"></i> Profile
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Section
                icon="fas fa-university"
                title="Professional"
                text={profile}
              />
              <Section
                icon="fas fa-hand-peace"
                title="Abilities"
                items={aptitudes}
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <Section
                icon="fas fa-globe"
                title="Languages"
                items={languages}
              />
              <Section icon="fas fa-bookmark" title="Skills" items={skills} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
