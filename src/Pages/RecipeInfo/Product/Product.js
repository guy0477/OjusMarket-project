import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Product.scss';
class Product extends Component {
  clickHandler = id => {
    this.props.history.push(`/ingredients/${id}`);
  };

  render() {
    const { id, image, name, price } = this.props;

    return (
      <div className="Product">
        <div onClick={() => this.clickHandler(id)} className="productbox1">
          <img className="onionImg" src={image} alt="제품명" />
          <div className="productInfo">
            <h3>{name}</h3>
            <span>{Math.floor(price).toLocaleString()}원</span>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Product);
