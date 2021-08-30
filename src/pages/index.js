import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Academy from "./Academy"
import Aptitudes from "./Aptitudes"
import Contacts from "./Contacts"
import Skills from "./Skills"
import Studies from "./Studies"
import Works from "./Works"

const IndexPage = () => (
  <>
    <Seo title="Profile" />
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="title col-12">
            <h1 className="header-title">
              Félix Galindo <small>Web Developer Full Stack</small>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>
                <a name="Profile">
                  <i className="fas fa-user"></i> Perfil
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="expertise-item">
              <h3>
                <i className="fas fa-university"></i> Profesional
              </h3>
              <p>
                Capaz de aplicar y desarrollar las herramientas adecuadas para
                el tratamiento automatizado de la información en base a los
                conocimientos en las áreas tales como: sistemas, computación,
                ciencias básicas, organizacionales y administrativas. Sólidos
                conocimientos en herramientas de software y hardware, además de
                tener un alto valor ético en el manejo de la información.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="expertise-item">
              <h3>
                <i className="fas fa-globe"></i> Idiomas
              </h3>
              <ul className="list-group">
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Español (Nativo)
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Ingles Técnico (Lectura)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="expertise-item">
              <h3>
                <i className="fas fa-hand-peace"></i> Actitudes
              </h3>
              <ul className="list-group">
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Liderazgo y comunicación
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Responsabilidad
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Toma de decisiones
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Observación y análisis
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Planificación y modelado de
                  sistemas
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Creatividad
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Trabajo en equipo
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Trabajo bajo presión
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Siempre dispuesto al
                  aprendizaje
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="expertise-item">
              <h3>
                <i className="fas fa-bookmark"></i> Áreas de Conocimiento
              </h3>
              <ul className="list-group">
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Web Developer Full Stack
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Análisis y Desarrollo de
                  Sistemas de Información
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Análisis y modelado de bases
                  de datos
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Lenguajes de programación web
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Frameworks y librerías web
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Desarrollo de Aplicaciones
                  Móviles Hibridas
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Desarrollo de APIs
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Diseño grafico básico
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Manejo de repositorios y
                  control de versiones
                </li>
                <li className="list-group-item">
                  {" "}
                  <i className="fas fa-check"></i>Adaptación a nuevos lenguajes
                  de programación
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Academy />
      <Aptitudes />
      <Skills />
      <Studies />
      <Works />
      <Contacts />
    </Layout>
  </>
)

export default IndexPage
