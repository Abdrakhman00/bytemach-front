import { Component } from "react";
import { FaLaptopCode, FaGlobe, FaMobileAlt, FaCogs, FaRobot, FaBrain } from "react-icons/fa"; 

class ServicesComp extends Component {
  render() {
    return (
      <div className="services__servicesComp">
        <div>
          <h1>Наши технологические решения</h1>
          {/* <button className="btn btn-primary">Показать ещё</button> */}
        </div>
        <div>
          <div>
            <div className="icon">
              <FaLaptopCode />
            </div>
            <h4>Разработка ПО</h4>
            <p>Индивидуальные программные решения для бизнеса.</p>
          </div>
          <div>
            <div className="icon">
              <FaGlobe />
            </div>
            <h4>Веб-приложения</h4>
            <p>Современные веб-решения с CRM-интеграцией.</p>
          </div>
          <div>
            <div className="icon">
              <FaMobileAlt />
            </div>
            <h4>Мобильные приложения</h4>
            <p>Удобные и интуитивные мобильные решения.</p>
          </div>
          <div>
            <div className="icon">
              <FaCogs />
            </div>
            <h4>Автоматизация</h4>
            <p>Оптимизация бизнес-процессов.</p>
          </div>
          <div>
            <div className="icon">
              <FaRobot />
            </div>
            <h4>Чат-боты</h4>
            <p>Автоматизация общения в мессенджерах.</p>
          </div>
          <div>
            <div className="icon">
              <FaBrain />
            </div>
            <h4>ИИ-интеграция</h4>
            <p>Использование ИИ для улучшения процессов.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesComp;
