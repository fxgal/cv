import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Navigator from "../Navigator/Navigator"

const Sidebar = () => {
  return (
    <header className="header theiaStickySidebar">
      <div className="profile-img">
        <StaticImage
          src="../../assets/images/profile.jpg"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Avatar"
          className="img-responsive profile"
        />
      </div>
      <div className="content">
        <h1>Félix Galindo</h1>
        <span className="lead">Ingeniero en Informática</span>

        <div className="about-text">
          <div className="row">
            <div className="col-md-12">
              <address>
                <strong>
                  <i className="fas fa-map-marker"></i> Dirección
                </strong>
                <br />
                San Juan de Los Morros
                <br />
                Guárico, Venezuela
              </address>
              <address>
                <strong>
                  <i className="fas fa-phone-square"></i> Número Telefónico
                </strong>
                <br />
                +58 412 536 0034
              </address>

              <address>
                <strong>
                  <i className="fas fa-envelope"></i> Email
                </strong>
                <br />
                <a href="mailto:fxgal.dev@gmail.com">fxgal.dev@gmail.com</a>
              </address>
              <address>
                <strong>
                  <i className="fab fa-telegram"></i> Telegram
                </strong>
                <br />
                <a href="https://t.me/fxgal">@fxgal</a>
              </address>
              <address>
                <strong>
                  <i className="fab fa-whatsapp"></i> Whatsapp
                </strong>
                <br />
                <a href="https://wa.me/04125360034">Send</a>
              </address>
            </div>
          </div>
        </div>

        <ul className="social-icon">
          <li>
            <a href="https://github.com/fxgal" title="github">
              <i className="fab fa-github-alt" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://bitbucket.org/fgalindo/" title="bitbucket">
              <i className="fab fa-bitbucket" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://felixg.slack.com" title="slack">
              <i className="fab fa-slack" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <Navigator />
    </header>
  )
}

export default Sidebar
