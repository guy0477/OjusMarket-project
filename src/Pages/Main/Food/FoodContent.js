import React from 'react';
import { withRouter } from 'react-router-dom';

const LABEL_COLOR = {
  냉장: '#686de0',
  냉동: '#7ed6df',
  실온: '#f0932b',
  싱싱: '#badc58',
};

class FoodContent extends React.Component {
  goToDetail = () => {
    const { id } = this.props.ingredients;
    this.props.history.push(`/ingredients/${id}`);
  };

  render() {
    const { image_url, storage, price, name } = this.props.ingredients;
    const labelName = storage;
    return (
      <div className="food-content" onClick={this.goToDetail}>
        <img alt="제품사진" src={image_url} />
        <div
          className="storage-label"
          style={{ backgroundColor: LABEL_COLOR[labelName] }}
        >
          <span>{storage}</span>
        </div>
        <div className="hover-btn">
          <button>
            <i className="fas fa-shopping-cart"></i>
          </button>
          <button>
            <i className="far fa-heart"></i>
          </button>
        </div>
        <div className="food-info">
          <p className="delivery-label">오져스배송</p>
          <h2>{name}</h2>
          <p>
            <span>
              <b>{Math.floor(price).toLocaleString()}</b>원
            </span>
          </p>
        </div>
      </div>
    );
  }
}
export default withRouter(FoodContent);
