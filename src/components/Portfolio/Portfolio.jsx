import { Component } from "react";
import Work from "./Work_box";
import "./style.css";
class Portfolio extends Component {
  constructor() {
    super();
    this.works = [
      {
        img: "https://miro.medium.com/max/1400/0*MYd28f8vpLiE34ij.jpeg",
        title: "Современный дизайн UI/UX",
        text:
          "Мы должны помнить о долге и стремиться к совершенству. Это наш опыт"
      },
      {
        img:
          "https://i.pinimg.com/originals/80/a1/17/80a1173fb50fe01bac507532338eb336.png",
        title: "Веб-приложени",
        text:
          "Мы должны помнить о долге и стремиться к совершенству. Это наш опыт"
      },
      {
        img:
          "https://i.pinimg.com/originals/56/ae/76/56ae76f7bc1b3e0edc962cea1af7035f.png",
        title: "Web 3.0 приложение для соцсетей",
        text:
          "Мы должны помнить о долге и стремиться к совершенству. Это наш опыт"
      }
    ];
  }
  render() {
    return (
      <section className="container container__portfolio" id="portfolio">
        {/* <div className="portfolio__header">
          <h1>See Our Works Or Portfolio</h1>
          <button className="btn btn-primary">More About</button>
        </div> */}
        {this.works.map((work, index) => {
          if (index == 1) {
            return (
              <>
                <div className="portfolio__header">
                  <h1>Посмотрите наши работы или портфолио</h1>
                  <button className="btn btn-primary">Подробнее</button>
                </div>
                <Work img={work.img} title={work.title} text={work.text} />
              </>
            );
          }
          return <Work img={work.img} title={work.title} text={work.text} />;
        })}
      </section>
    );
  }
}
export default Portfolio;
