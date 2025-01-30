import { Component } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

// Import components
import HotNews from "./News__Hot";
import LatestNews from "./News__Latest";
import "./style.css";

class News extends Component {
  constructor() {
    super();
    this.hotNews = [
      {
        title: "astanahub - мы являемся резидентами ",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EJwoRXI_RvsWU6mO4hSq29xmIFCTmB9DRShPRNCfenKmgw1Xns-n1oh1-8mNOknrRyI&usqp=CAU",
        text:
          "AstanaHub – крупнейший IT-стартап-инкубатор в Центральной Азии, объединяющий инновационные компании и специалистов. Мы активно развиваем технологии, поддерживаем стартапы и создаем среду для роста высокотехнологичных решений."
      },
      {
        title: "Journal of Future Science and Technology - Создатель",
        avatar:
          "https://i.ibb.co.com/7dsGGy1z/Screenshot-7.png",
        text:
          "Journal of Future Science and Technology публикует передовые исследования в области искусственного интеллекта, биотехнологий и цифровых инноваций. Мы стремимся объединить ученых, предпринимателей и инженеров для создания технологического будущего."
      }
    ];
    this.latestNews = [
      {
        img: "https://baigenews.kz/storage/storage/news/2024/08/21/mainphoto/160475/1200xauto_G56MhS0olfVNMRGGCxM4k6NU18j3TZtPeD56b5mn.jpg.webp",
        date: "2024",
        author: "BaigeNews",
        text:
          "Казахстан обладает всеми необходимыми условиями для превращения в IT-страну. Эксперты отмечают рост инвестиций в технологии и развитие цифровой инфраструктуры.",
        link: "https://baigenews.kz/kazahstan-obladaet-vsemi-neobhodimymi-usloviyami-dlya-prevrascheniya-v-it-stranu-ekspert_182564/"
      },
      {
        img: "https://baigenews.kz/storage/storage/news/2024/11/08/mainphoto/166413/1200xauto_okFpcp8lwg0CstOypdoFEvhVhiALuNMBRWIIMI16.jpg.webp",
        date: "2024",
        author: "BaigeNews",
        text:
          "Как цифровизация и технологии меняют сферу образования в Казахстане? В статье рассматриваются современные тренды EdTech и влияние ИИ на учебные процессы.",
        link: "https://baigenews.kz/kak-tsifrovizatsiya-i-tehnologii-menyayut-sferu-obrazovaniya-v-kazahstane_300001085/"
      },
      {
        img: "https://toppress.kz/wp-content/uploads/2025/01/107c122c-2553-4c35-b010-29072bf9c74f-750x422.jpeg",
        date: "2024",
        author: "TopPress",
        text:
          "ИИ, цифровая безопасность и ключевые тезисы Токаева: эксперт рассказал о будущем технологического развития в Казахстане и мерах по защите данных.",
        link: "https://toppress.kz/article/it-iskusstvennii-intellekt-i-cifrovaya-bezopasnost-ekspert-o-tezisah-tokaeva-v-intervyu"
      }
    ];
  }

  render() {
    return (
      <section id="news" className="container news__container">
        <Swiper
          className="news__hot"
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {this.hotNews.map((feed, index) => (
            <SwiperSlide key={index}>
              <HotNews
                title={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={feed.avatar}
                      alt="Avatar"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        marginRight: "10px"
                      }}
                    />
                    {feed.title}
                  </div>
                }
                text={feed.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="news__latest">
          <h1>Последние новости</h1>
          {this.latestNews.map((feed, index) => (
            <a href={feed.link} key={index} target="_blank" rel="noopener noreferrer">
              <LatestNews
                img={feed.img}
                date={feed.date}
                author={feed.author}
                text={feed.text}
              />
            </a>
          ))}
        </div>
      </section>
    );
  }
}

export default News;
