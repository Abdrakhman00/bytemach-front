import { Component } from "react";
import Work from "./Work_box";
import "./style.css";

class Portfolio extends Component {
  constructor() {
    super();
    this.works = [
      {
        img: "https://i.ibb.co.com/jPqPHcMQ/Screenshot-6.png",
        title: "Интеллектуальный чат-бот",
        text: "Мы должны помнить о долге и стремиться к совершенству. Это наш опыт",
        // link: "https://example.com/uiux"
      },
      {
        img: "https://i.ibb.co.com/K6qTgDw/Screenshot-4.png",
        title: "Веб-приложение",
        text: "Мы должны помнить о долге и стремиться к совершенству. Это наш опыт",
        link: "https://maximus.com.kz/"
      },
      {
        img: "https://i.ibb.co.com/BKvSNXbX/Screenshot-8.png",
        title: "Journal of Future Science and Technology",
        text: "Мы должны помнить о долге и стремиться к совершенству. Это наш опыт",
        link: "http://journal.bytemachine.org/"
      }
    ];
  }

  render() {
    return (
      <section className="container container__portfolio" id="portfolio">
        {this.works.map((work, index) => {
          if (index === 1) {
            return (
              <>
                <div className="portfolio__header">
                  <h1>Посмотрите наши работы или портфолио</h1>
                  {/* <button className="btn btn-primary">Подробнее</button> */}
                </div>
                <Work
                  img={work.img}
                  title={work.title}
                  text={work.text}
                  link={work.link}
                />
              </>
            );
          }
          return (
            <Work
              img={work.img}
              title={work.title}
              text={work.text}
              link={work.link}
            />
          );
        })}
      </section>
    );
  }
}

export default Portfolio;
