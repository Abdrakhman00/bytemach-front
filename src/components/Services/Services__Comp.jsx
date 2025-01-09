import { Component } from "react";
import { GrShieldSecurity } from "react-icons/gr";
import { BsLaptop } from "react-icons/bs";

class ServicesComp extends Component {
  render() {
    return (
      <div className="services__servicesComp">
        <div>
          <h1>Наши услуги для технологий, которые вам нужны</h1>
          <button className="btn btn-primary">Показать ещё</button>
        </div>
        <div>
          <div>
            <div className="icon">
              <GrShieldSecurity />
            </div>
            <h4>Кибербезопасность</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div>
            <div className="icon">
              <BsLaptop />
            </div>
            <h4>IT-консультант</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div>
            <div className="icon">
              <GrShieldSecurity />
            </div>
            <h4>Искусственный интеллект</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div>
            <div className="icon">
              <BsLaptop />
            </div>
            <h4>Аналитика</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesComp;