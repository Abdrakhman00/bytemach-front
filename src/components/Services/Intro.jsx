import { Component } from "react";
import { BiBrain } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

class Intro extends Component {
  render() {
    return (
      <div className="services__intro">
        <div className="pos-rel">
          <div className="services__intro__image">
            <img
              src="https://img.freepik.com/premium-vector/boy-girl-holding-puzzle-pieces_118167-11449.jpg?semt=ais_hybrid"
              alt="Intro"
            />
          </div>
          <Swiper
            className="services__intro__miniSlider"
            spaceBetween={30}
            pagination={{
              clickable: true, // Enable pagination
            }}
          >
            <SwiperSlide>
              <div className="icon">
                <BiBrain />
              </div>
              <p>Спасибо вам за вашу постоянную поддержку.</p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon">
                <BiBrain />
              </div>
              <p>Спасибо вам за вашу постоянную поддержку.</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div className="services__intro__text">
            <h1>Мы предлагаем решения для IT-проблем</h1>
            <p className="text">
            Мы предлагаем решения для IT-проблем. 
            Наша команда экспертов предлагает профессиональные и инновационные решения для любых IT-задач
            Помогаем найти простые и быстрые подходы.
            </p>
            {/* <button className="btn btn-primary">Подробнее</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
