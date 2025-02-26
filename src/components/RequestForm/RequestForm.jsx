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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Проверка обязательных полей
    if (!formData.firstName.trim() || !formData.phone.trim()) {
      alert("Поля 'Имя' и 'Телефон' обязательны для заполнения!");
      return;
    }

    try {
      // Отправка запроса на сервер
      const response = await fetch("https://bytemachine.org/chat/send_application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // ВАЖНО: ключи должны совпадать с теми, что ожидает бэкенд
          user_name: formData.firstName, 
          user_phone: formData.phone,
          user_email: formData.email,
          user_message: formData.message,
        }),
      });

      // Проверяем статус ответа
      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      // Обрабатываем ответ (если нужно)
      const data = await response.json();
      console.log("Успешно отправлено:", data);
      
      // Можно сбросить поля формы
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });

      // Можно показать уведомление об успехе
      alert("Сообщение успешно отправлено!");

    } catch (error) {
      console.error("Ошибка при отправке:", error);
      alert("Произошла ошибка при отправке. Попробуйте позже.");
    }
  };

  return (
    <div className="combined-card">
      <div className="chat-section">
        <h2 className="chat-title">Свяжемся?</h2>
        <p className="chat-description">
          Готов обсудить ваш проект, ответить на вопросы или просто пообщаться.
          Оставьте сообщение через форму обратной связи!
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
