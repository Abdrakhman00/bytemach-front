import { Component } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";
class About extends Component {
  constructor() {
    super();
    this.state = {
      percentage: 75
    };
  }
  render() {
    return (
      <section className="about__container">
        <div className="container">
          <div>
            <h1>Развитие инноваций в IT-решениях</h1>
            <p className="text">
            Добро пожаловать на наш сайт, 
            посвященный развитию инновационных IT-решений! Мы исследуем современные технологии, 
            которые трансформируют бизнес и улучшают жизнь людей. Здесь вы найдете идеи, которые вдохновляют, 
            и решения, которые двигают прогресс.
            </p>
            <div className="about__buttons">
              <a href='tel:+7087638739' className="btn btn-primary">Связаться с нами</a>
              <a href="#services">
                <span>Наши услуги</span>
                <AiOutlineArrowDown />
              </a>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="about__image">
              <img
                src="https://img.freepik.com/free-vector/business-support-concept-illustration_114360-9176.jpg?t=st=1733853474~exp=1733857074~hmac=b50c801a989c018c6c830efe16e1924e8601520d474ef3c230474d0a0d64cef1&w=740"
                alt="about"
              />
            </div>
            <div className="about__progress">
              <div className="progress_bar">
                <CircularProgressbar
                  value={this.state.percentage}
                  text={`${this.state.percentage}%`}
                />
              </div>
              <h4>
                Рост бизнеса
                <br />
                <small>Высокий уровень</small>
              </h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
