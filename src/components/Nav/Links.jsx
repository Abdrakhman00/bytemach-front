import { Component } from "react";
import { RiMenu3Line } from "react-icons/ri";

class Links extends Component {
  constructor() {
    super();
    this.links = [
      { id: "Главная", label: "Главная" },
      { id: "about", label: "О нас" },
      { id: "services", label: "Услуги" },
      { id: "portfolio", label: "Портфолио" },
      { id: "testimony", label: "Отзывы" },
      // { id: "news", label: "Новости" },
      { id: "contact", label: "Контакты" }
    ];
    this.state = {
      linksVisibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((lastState) => ({
      linksVisibility: !lastState.linksVisibility
    }));
  }

  render() {
    return (
      <>
        <div className="links__button hide__button">
          <button className="btn menu" onClick={this.toggleVisibility}>
            <RiMenu3Line />
          </button>
        </div>
        <div
          className={`links ${
            !this.state.linksVisibility ? "hide__links" : ""
          }`}
        >
          {this.links.map((link, index) => (
            <a
              key={link.id}
              className={!index ? "active" : ""}
              href={`#${link.id}`}
              onClick={this.toggleVisibility}
            >
              {link.label}
            </a>
          ))}
        </div>
      </>
    );
  }
}

export default Links;

