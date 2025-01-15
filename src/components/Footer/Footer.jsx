import { Component } from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import "./style.css";
class Footer extends Component {
  render() {
    return (
      <footer id="contact" className="container footer__container">
        <div className="about">
          <img src="https://i.ibb.co.com/Ltv3d8V/logo-byte-machine.png" alt="Логотип" className="footer__logo" style={{ maxWidth: '150px', height: 'auto' }}/>
          <p className="text">
            Мы предлагаем решения для IT-проблем. 
            Наша команда экспертов предлагает профессиональные и инновационные решения для любых IT-задач
            Помогаем найти простые и быстрые подходы.
          </p>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/byte_machine/">
                <CgInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
        <div className="services">
          <h3>Услуги</h3>
          <ul>
            <li>
              <a href="#" className="text">
                Кибербезопасность
              </a>
            </li>
            <li>
              <a href="#" className="text">
                IT-консалтинг
              </a>
            </li>
            <li>
              <a href="#" className="text">
                Стратегия и исследования
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Контакты</h3>
          <ul>
            <li>
              <address className="text">
                Офис: ​БЦ Жар-Су​Улица Тулебаева, 38/61​508 офис; 5 этаж
                Медеуский район, Алматы,
              </address>
            </li>
            <li>
              <a href="tel:+7 708 763 8739" className="text">
                Телефон: +7 708 763 8739
              </a>
            </li>
            <li>
              <a href="mailto:lormail@gmail.com" className="text">
                Email: lormail@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
