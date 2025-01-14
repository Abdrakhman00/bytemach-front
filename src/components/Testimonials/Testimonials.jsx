import { Component } from "react";
import Testimony from "./Testimony";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import avatar_1 from"./Avatar/Screenshot_1.png";

class Testimonials extends Component {
  constructor() {
    super();
    this.state = {
      slidesPerView: 2.5
    };
    this.fitSlidesPerView = this.fitSlidesPerView.bind(this);
  }

  fitSlidesPerView() {
    if (window.innerWidth <= 1024 && !(window.innerWidth <= 600)) {
      this.setState({ slidesPerView: 1.3 });
    } else if (window.innerWidth <= 600) {
      this.setState({ slidesPerView: 1 });
    } else {
      this.setState({ slidesPerView: 2.5 });
    }
  }

  componentDidMount() {
    this.fitSlidesPerView();
    window.addEventListener("resize", this.fitSlidesPerView);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.fitSlidesPerView);
  }

  render() {
    return (
      <section id="testimony" className="container container__testimonials">
        <h1 className="container">Что люди говорят о нас</h1>
        <Swiper
          className="testimonials__slide container"
          slidesPerView={this.state.slidesPerView}
          spaceBetween={20}
        >
          <SwiperSlide>
            <Testimony 
              img="https://i.ibb.co.com/Snj0JWc/Screenshot-1.png" 
              comment="Проект, который развивают владельцы данного стартапа, через очень короткое время изменит правила игры в сфере услуг. Стартап имеет амбициозные цели, а именно, ассистент в области администрирования операционной деятельности, HR и Call-center на базе ИИ." 
              name="Марс Джазылбеков" 
            //   role="Бизнесмен" 
              link="https://2gis.kz/almaty/firm/70000001090486475/tab/reviews?m=76.948657%2C43.265051%2F16" 
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimony 
              img="https://i.ibb.co.com/qkS7JKq/Screenshot-2.png" 
              comment="Очень крутой продукт, помогает решить все проблемы с отделом продаж. Сделал уже предзаказ на aisale. Жду когда внедрят искусственный интеллект в мою компанию." 
              name="Айдын Темирхан" 
            //   role="Менеджер" 
              link="https://2gis.kz/almaty/firm/70000001090486475/tab/reviews?m=76.948657%2C43.265051%2F16" 
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimony 
              img="https://i.ibb.co.com/zV2BSCR/Screenshot-3.png" 
              comment="Ассаламалйкум бул компанияға рахмет, менің сурақтарымды тез арада шешіп берді улкен рахмет!" 
              name="Намазбаев Беглан" 
            //   role="Предприниматель" 
              link="https://2gis.kz/almaty/firm/70000001090486475/tab/reviews?m=76.948657%2C43.265051%2F16" 
            />
          </SwiperSlide>
        </Swiper>
      </section>
    );
  }
}

export default Testimonials;
