import React from 'react';
import './CartItem.scss';

class CartItem extends React.Component {
  render() {
    const {
      id,
      name,
      index,
      image,
      count,
      price,
      selectedArr,
      handleQuantity,
      removeCartItem,
      handleIsChecked,
    } = this.props;
    return (
      <li className="cart-item">
        <div>
          <div className="cart-item__info">
            <button onClick={() => handleIsChecked(index)}>
              <i
                className={`fas fa-check-circle fa-lg ${
                  selectedArr[index] ? `checked` : ``
                }`}
              />
            </button>
            <img className="item-image" src={image} alt="상품이미지" />
            <div className="item-name">
              <span>{name}</span>
            </div>
          </div>
          <div className="cart-button__container">
            <div className="item-button__box">
              <button
                value={index}
                className="quantity-minus"
                onClick={handleQuantity}
              >
                -
              </button>
              <span>{count}</span>
              <button
                value={index}
                className="quantity-plus"
                onClick={handleQuantity}
              >
                +
              </button>
            </div>
            <div className="item-total__price">
              <span>{(price * count).toLocaleString()}</span>
              <span>원</span>
            </div>
            <button className="item-delete" onClick={() => removeCartItem(id)}>
              <i className="fas fa-times fa-lg" />
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default CartItem;
