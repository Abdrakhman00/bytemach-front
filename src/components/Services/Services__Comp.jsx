import { Component } from "react";
import { FaLock, FaChartBar, FaRobot, FaTools } from "react-icons/fa"; // Новые иконки

class ServicesComp extends Component {
  render() {
    return (
      <div className="services__servicesComp">
        <div>
          <h1>Наши услуги для технологий, которые вам нужны</h1>
          {/* <button className="btn btn-primary">Показать ещё</button> */}
        </div>
        <div>
          <div>
            <div className="icon">
              <FaLock /> {/* Иконка замка */}
            </div>
            <h4>Кибербезопасность</h4>
            <p>Защитите свои данные и сети с помощью наших передовых решений по кибербезопасности.</p>
          </div>
          <div>
            <div className="icon">
              <FaTools /> {/* Иконка инструментов */}
            </div>
            <h4>IT-консультант</h4>
            <p>Получите экспертную помощь в разработке и оптимизации ваших IT-систем.</p>
          </div>
          <div>
            <div className="icon">
              <FaRobot /> {/* Иконка робота */}
            </div>
            <h4>Искусственный интеллект</h4>
            <p>Внедряйте инновационные AI-решения для автоматизации и улучшения процессов.</p>
          </div>
          <div>
            <div className="icon">
              <FaChartBar /> {/* Иконка графика */}
            </div>
            <h4>Аналитика</h4>
            <p>Используйте наши инструменты аналитики для принятия обоснованных бизнес-решений.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesComp;
