import { Component } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import News from "./components/News/News";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import RequestForm from "./components/RequestForm/RequestForm";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Nav />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <News />
        <Banner />
        <RequestForm />
        <Footer />
      </>
    );
  }
}

export default App;
