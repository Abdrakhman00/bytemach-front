import { Component } from "react";

class Testimony extends Component {
  render() {
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="testimony__link">
        <div className="testimony">
          <div className="testimony__avatar">
            <img src={this.props.img} alt="User Avatar" />
          </div>
          <div className="testimony__comment">
            <p className="text">{this.props.comment}</p>
            <p className="text">
              <strong style={{ color: "black" }}>{this.props.name}  </strong>
              {this.props.role}
            </p>
          </div>
        </div>
      </a>
    );
  }
}

export default Testimony;
