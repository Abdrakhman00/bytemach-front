import { Component } from "react";
import "./style.css";
class Banner extends Component {
  render() {
    return (
      <section id="banner" className="banner__container">
        <div className="container">
          <h1>
            Давайте развивать ваш бизнес 
            <br /> с помощью новейших технологий
          </h1>
          <a href='tel:+7087638739' className="btn btn-primary">Связаться с нами</a>
        </div>
      </section>
    );
  }
}
export default Banner;
