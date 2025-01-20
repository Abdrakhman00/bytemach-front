import React, { useState } from 'react';
import './style.css'; // Стили, как в вашем примере

const newsData = [
  {
    id: 1,
    link: '#',
    image: 'https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    title: 'Amazing First Title',
    date: 'Jan 29, 2018',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio.'
  },
  {
    id: 2,
    link: '#',
    image: 'https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    title: 'Amazing Second Title that is Quite Long',
    date: 'Jan 29, 2018',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit.'
  },
  // Добавьте другие карточки, если нужно

];

const NewsCard = ({ link, image, title, date, text }) => {
  return (
    
    <div className="news-card" >
      <a href={link} className="news-card__card-link"></a>
      <img src={image} alt={title} className="news-card__image" />
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">{title}</h2>
        <div className="news-card__post-date">{date}</div>
        <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">{text}</p>
          <a href={link} className="news-card__read-more">
            Read more <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const NewsCards = () => {
  const [cards, setCards] = useState(newsData);

  return (
    <div className="content-wrapper">
    <h1 className="content-title">News</h1>
      {cards.map((card) => (
        <NewsCard
          key={card.id}
          link={card.link}
          image={card.image}
          title={card.title}
          date={card.date}
          text={card.text}
        />
      ))}
    </div>
  );
};

export default NewsCards;
