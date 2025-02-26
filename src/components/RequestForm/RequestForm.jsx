import { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaComment } from "react-icons/fa";
import "./RequestForm.css";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.firstName.trim() || !formData.phone.trim()) {
      alert("Поля 'Имя' и 'Телефон' обязательны для заполнения!");
      return;
    }

    console.log("Форма отправлена", formData);
    // Здесь можно добавить отправку данных на сервер
  };

  return (
    <div className="form-wrapper">
      <div className="chat-section">
        <h2 className="chat-title">Свяжемся?</h2>
        <p className="chat-description">
        Готов обсудить ваш проект, 
        ответить на вопросы или просто пообщаться. Оставьте сообщение через форму обратной связи!
        </p>
      </div>
      <div className="form-container">
        <h2 className="form-title">Оставьте заявку</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label"><FaUser /> Имя</label>
              <input
                type="text"
                name="firstName"
                placeholder="Введите ваше имя"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            {/* <div className="form-group">
              <label className="form-label"><FaUser /> Фамилия</label>
              <input
                type="text"
                name="lastName"
                placeholder="Введите вашу фамилию"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
              />
            </div> */}
          </div>
          <div className="form-group">
            <label className="form-label"><FaPhone /> Телефон</label>
            <input
              type="tel"
              name="phone"
              placeholder="Введите ваш телефон"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label"><FaEnvelope /> Email</label>
            <input
              type="email"
              name="email"
              placeholder="Введите ваш email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label"><FaComment /> Сообщение</label>
            <textarea
              name="message"
              placeholder="Введите ваше сообщение"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>
          <button type="submit" className="form-button">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;