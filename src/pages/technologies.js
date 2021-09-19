import React from "react"
import Layout from "../components/layout"
import ProgressElement from "../components/Section/ProgressElement"
import Seo from "../components/seo"

const Technologies = () => {
  const items = [
    { title: "React JS 16^ / MERN Stack", percent: 80 },
    { title: "JS ES6^ / TypeScript / Jquery", percent: 80 },
    { title: "API Rest / JWT", percent: 80 },
    { title: "CakePHP 2/3/4", percent: 90 },
    { title: "Backend (PHP, NodeJS)", percent: 90 },
    { title: "Git / Git Flow", percent: 80 },
    { title: "Databases (SQL / NoSql / Redis)", percent: 80 },
    { title: "Websockets / SocketIO / Realtime", percent: 80 },
    { title: "CSS / Sass", percent: 85 },
    { title: "HTML 5^", percent: 95 },
    { title: "React Native", percent: 40, subtitle: "por actualizar" },
    { title: "Laravel 5^", percent: 40, subtitle: "por actualizar" },
    { title: "Angular 7^", percent: 40, subtitle: "por actualizar" },
    { title: "Ionic 4 ", percent: 40, subtitle: "por actualizar" },
  ]
  return (
    <>
      <Seo title="Tecnologías" />
      <Layout>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>
                  <i className="fas fa-laptop"></i> Technologies
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p>
                The following skills are averaged against experience on the most
                recent projects.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              {items.map((item, key) => (
                <ProgressElement key={key} item={item} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Technologies
