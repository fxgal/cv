import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Studies = () => {
  return (
    <>
      <Seo title="Studies" />
      <Layout>
        <section className="section-wrapper section-education mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2>
                    <i className="far fa-bookmark"></i> Cursos
                  </h2>
                </div>
              </div>
              <div className="col-md-12">
                <div className="content-item">
                  <small>2018</small>
                  <h3>ReactNative Developer</h3>
                  <h4>UDEMY</h4>
                  <p>OnLine</p>
                  <ul className="list-group">
                    <li>
                      <i className="fas fa-link"></i>{" "}
                      <a
                        href="https://www.udemy.com/certificate/UC-X07NSI70/"
                      >
                        Certificado
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content-item">
                  <small>2008</small>
                  <h3>Programming Fundamentals</h3>
                  <h4>
                    IBM Advance Career Education e-business Application
                    Developer Program
                  </h4>
                  <p>San Juan de Los Morros, Venezuela</p>
                </div>
                <div className="content-item">
                  <small>2008</small>
                  <h3>IT and Networking Fundamentals</h3>
                  <h4>
                    IBM Advance Career Education e-business Application
                    Developer Program
                  </h4>
                  <p>San Juan de Los Morros, Venezuela</p>
                </div>
                <div className="content-item">
                  <small>2008</small>
                  <h3>Applications Developer</h3>
                  <h4>
                    IBM Advance Career Education e-business Application
                    Developer Program
                  </h4>
                  <p>San Juan de Los Morros, Venezuela</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2>
                    <i className="fas fa-certificate"></i> Certificados y
                    Diplomas
                  </h2>
                </div>
              </div>
              <div className="col-md-12">
                <div className="content-item">
                  <small>2013</small>
                  <h3>Participación en Segundas Tecnoferias</h3>
                  <h4>Universidad Rómulo Gallegos</h4>
                  <p>San Juan de Los Morros, Venezuela</p>
                </div>
                <div className="content-item">
                  <small>2007</small>
                  <h3>
                    Foro de Herramientas para el Desarrollo e Implementación de
                    Aplicaciones
                  </h3>
                  <h4>Universidad Rómulo Gallegos</h4>
                  <p>San Juan de Los Morros, Venezuela</p>
                </div>
                <div className="content-item">
                  <small>2007</small>
                  <h3>Jornada de Microsoft Andean Developerdays</h3>
                  <h4>Microsoft</h4>
                  <p>Caracas, Venezuela</p>
                </div>
                <div className="content-item">
                  <small>2005</small>
                  <h3>
                    Jornada de Software Libre Desarrollando con Estándares
                    Abiertos
                  </h3>
                  <h4>Universidad Rómulo Gallegos</h4>
                  <p>San Juan de Los Morros, Venezuela</p>
                </div>
                <div className="content-item">
                  <small>2005</small>
                  <h3>
                    Primera Jornada de Inducción a GNU/Linux y Festival de
                    Instalación
                  </h3>
                  <h4>Universidad Rómulo Gallegos</h4>
                  <p>San Juan de Los Morros, Venezuela</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Studies
