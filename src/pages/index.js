import * as React from "react"

import Layout from "../components/layout"
import Section from "../components/Section/Section"
import Seo from "../components/seo"

const IndexPage = () => {
  const profile =
    "Capaz de aplicar y desarrollar las herramientas adecuadas para el tratamiento automatizado de la información en base a los conocimientos en las áreas tales como: sistemas, computación, ciencias básicas, organizacionales y administrativas. Sólidos conocimientos en herramientas de software y hardware, además de tener un alto valor ético en el manejo de la información."
  const languages = ["Español", "Inglés"]
  const aptitudes = [
    "Liderazgo y comunicación",
    "Responsabilidad",
    "Toma de decisiones",
    "Observación y análisis",
    "Planificación y modelado de",
    "Creatividad",
    "Trabajo en equipo",
    "Trabajo bajo presión",
    "Capacidad de adaptación rápida a cualquier lenguaje",
  ]

  const knowedges = [
    "Web Developer Full Stack",
    "Análisis y Desarrollo de Sistemas de Información",
    "Análisis y modelado de bases de datos",
    "Lenguajes de programación web",
    "Frameworks y librerías web",
    "Desarrollo de Aplicaciones Móviles Hibridas",
    "Desarrollo de APIs",
    "Manejo de repositorios y control de versiones",
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
              <Section
                icon="fas fa-bookmark"
                title="Áreas de Conocimiento"
                items={knowedges}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
