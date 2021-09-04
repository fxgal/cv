import * as React from "react"

import Layout from "../components/layout"
import Section from "../components/Section/Section"
import Seo from "../components/seo"

const IndexPage = () => {
  const profile =
    "Capaz de aplicar y desarrollar las herramientas adecuadas para el tratamiento automatizado de la información en base a los conocimientos en las áreas tales como: sistemas, computación, ciencias básicas, organizacionales y administrativas. Sólidos conocimientos en herramientas de software y hardware, además de tener un alto valor ético en el manejo de la información."
  const languages = ["Español", "Inglés básico"]
  const aptitudes = [
    "Responsabilidad",
    "Comunicación eficaz",
    "Toma de decisiones",
    "Observación y análisis",
    "Planificación y modelado",
    "Creatividad",
    "Trabajo en equipo",
    "Trabajo bajo presión",
    "Adaptación rápida a lenguages y tecnologías",
  ]

  const skills = [
    "Web Developer Full Stack",
    "Sistemas de Información",
    "Modelado de bases de datos SQL y NoSQL",
    "Lenguajes de programación web",
    "Frameworks y librerías web",
    "Aplicaciones Móviles Hibridas",
    "Realtime y websockets",
    "API Rest",
    "Repositorios y control de versiones",
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
                  <i className="fas fa-user"></i> Perfil
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Section
                icon="fas fa-university"
                title="Profesional"
                text={profile}
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <Section icon="fas fa-globe" title="Idiomas" items={languages} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Section
                icon="fas fa-hand-peace"
                title="Aptitudes"
                items={aptitudes}
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <Section icon="fas fa-bookmark" title="Skills" items={skills} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
