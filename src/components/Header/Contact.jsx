import { Component } from "react";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="mailto:bytemachine@mail.ru">
          <AiFillMail />
          <span>bytemachine@mail.ru</span>
        </a>

        <a href="tel:+7 708 763 8739">
          <AiFillPhone />
          <span>+7 708 763 8739</span>
        </a>
      </div>
    );
  }
}

export default Contact;
