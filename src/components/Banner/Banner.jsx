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
          <button className="btn btn-primary">Свяжитесь с нами</button>
        </div>
      </section>
    );
  }
}
export default Banner;
