import { Component } from "react";
import "./style__work.css";

class Work extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio__work">
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <img src={this.props.img} alt={this.props.title} />
          <h2>{this.props.title}</h2>
          <p className="text">{this.props.text}</p>
        </a>
      </div>
    );
  }
}

export default Work;
