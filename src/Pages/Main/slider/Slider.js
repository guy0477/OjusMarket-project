import React from 'react';
import './Slider.scss';

class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      TransformImg: -100,
      TransitionImg: '',
    };
  }

  nextBtn = () => {
    if (this.state.TransformImg > -600) {
      this.setState({
        TransformImg: this.state.TransformImg - 100,
        TransitionImg: '1s ease-in-out',
      });
    }
  };

  prevBtn = () => {
    if (this.state.TransformImg < 0) {
      this.setState({
        TransformImg: this.state.TransformImg + 100,
        TransitionImg: '1s ease-in-out',
      });
    }
  };

  componentDidMount() {
    this.autoSlide = setInterval(() => {
      if (this.state.TransformImg > -600) {
        this.setState({
          TransformImg: this.state.TransformImg - 100,
          TransitionImg: '1s ease-in-out',
        });
      }
    }, 4000);
  }

  componentDidUpdate() {
    if (this.state.TransformImg === -600) {
      setTimeout(() => {
        this.setState({
          TransformImg: -100,
          TransitionImg: '0s',
        });
      }, 1000);
    }

    if (this.state.TransformImg === 0) {
      setTimeout(() => {
        this.setState({
          TransformImg: -500,
          TransitionImg: '0s',
        });
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.autoSlide);
  }

  render() {
    const count = this.state.TransformImg;
    const { slideImgList } = this.props;
    return (
      <div className="image-slider">
        <ul
          className="image-box"
          style={{
            transform: `translateX(${count}vw)`,
            transition: `${this.state.TransitionImg}`,
          }}
        >
          <li>
            <img
              alt="슬라이드 이미지"
              src={slideImgList[slideImgList.length - 1]}
            />
          </li>
          {slideImgList.map((data, idx) => {
            return (
              <li key={idx}>
                <img alt="슬라이드 이미지" src={data} />
              </li>
            );
          })}
          <li>
            <img alt="슬라이드 이미지" src={slideImgList[0]} />
          </li>
        </ul>
        <div className="image-side-btn">
          <button onClick={this.prevBtn}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={this.nextBtn}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    );
  }
}
export default Slider;
