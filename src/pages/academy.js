import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Academy = () => {
  return (
    <>
      <Seo title="Academy" />
      <Layout>
        <section className="section-wrapper section-education mt-5 d-flex">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2>
                    <i className="fas fa-graduation-cap"></i> Formación
                    Académica Profesional
                  </h2>
                </div>
              </div>
              <div className="col-md-12">
                <div className="content-item">
                  <small>2015 - 2020</small>
                  <h3>Doctorado en Ciencias de la Educación</h3>
                  <h4>Universidad Rómulo Gallegos</h4>
                  <p>San Juan de Los Morros, Venezuela</p>
                </div>
                <div className="content-item">
                  <small>2012 - 2014</small>
                  <h3>Especialista en Docencia Universitaria</h3>
                  <h4>Universidad Rómulo Gallegos</h4>
                  <p>San Juan de Los Morros, Venezuela</p>
                </div>
                <div className="content-item">
                  <small>2004 - 2009</small>
                  <h3>Ingeniero en Informática</h3>
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

export default Academy
