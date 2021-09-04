import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Portfolio = () => {
  return (
    <>
      <Seo title="Portfolio" />
      <Layout>
        <section class="section-wrapper section-experience gray-bg mt-5">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="section-title">
                  <h2>
                    <i class="fas fa-fire"></i> Portafolio
                  </h2>
                </div>
              </div>
              <div class="col-md-12">
                <div class="content-item">
                  <small>2018</small>
                  <h3>Web Developer</h3>
                  <h4>Init 10 Developement</h4>
                  <p>Argentina</p>
                  <ul class="list-group">
                    <li>
                      <i class="fas fa-link"></i>{" "}
                      <a href="https://www.ichimokufibonacci.com">
                        Ichimoku Fibonacci
                      </a>
                    </li>
                    <li>
                      <i class="fas fa-link"></i>{" "}
                      <a href="https://members.ichimokufibonacci.com">
                        Ichimoku Fibonacci Members
                      </a>
                    </li>
                    <li>
                      <i class="fas fa-link"></i>{" "}
                      <a href="https://admin.ichimokufibonacci.com">
                        Ichimoku Fibonacci Admin
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="content-item">
                  <small>2017 - 2018</small>
                  <h3>Web Developer</h3>
                  <h4>ChileDev</h4>
                  <p>Chile</p>
                  <ul class="list-group">
                    <li>
                      <i class="fas fa-link"></i>{" "}
                      <a href="https://www.linkedin.com/company/chiledev">
                        ChileDev
                      </a>
                    </li>
                    <li>
                      <i class="fas fa-link"></i>{" "}
                      <a href="https://www.gestionaeduca.cl">GestionaEduca</a>
                    </li>
                  </ul>
                </div>
                <div class="content-item">
                  <small>2017</small>
                  <h3>Web Developer</h3>
                  <h4>Universidad Rómulo Gallegos</h4>
                  <p>Venezuela</p>
                  <ul class="list-group">
                    <li>
                      <i class="fas fa-link"></i>{" "}
                      <a href="https://www.unerg.edu.ve">Sisprove (Local)</a>
                    </li>
                  </ul>
                </div>
                <div class="content-item">
                  <small>2015</small>
                  <h3>Web Developer</h3>
                  <h4>Universidad Rómulo Gallegos</h4>
                  <p>Venezuela</p>
                  <ul class="list-group">
                    <li>
                      <i class="fas fa-link"></i>{" "}
                      <a href="http://rrhh.unerg.edu.ve">
                        SIIL (Sistema Integral de Información Laboral)
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="content-item">
                  <small>2013</small>
                  <h3>Web Developer</h3>
                  <h4>Universidad Rómulo Gallegos</h4>
                  <p>Venezuela</p>
                  <ul class="list-group">
                    <li>
                      <i class="fas fa-link"></i>{" "}
                      <a href="#">Sistema de Recibos de Pago</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Portfolio
