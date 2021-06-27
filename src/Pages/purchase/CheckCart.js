import React from 'react';
import './CheckCart.scss';

class CheckCart extends React.Component {
  // getTotalPrice = () => {
  //   const { cartData } = this.props;
  //   let totalPrice = 0;
  //   cartData.forEach(cartItem => {
  //     totalPrice += cartItem.price * cartItem.count;
  //   });
  //   return totalPrice;
  // };

  render() {
    const { cartData, getTotalPrice } = this.props;

    return (
      <div className="check-cart">
        <div className="notice">
          <i className="fas fa-info-circle"></i>
          <p>
            배송방법에 따른 배송 불가 상품이 포함되어 있는 경우 해당 상품은 주문
            취소 될 수 있습니다.
          </p>
        </div>
        <div className="cart-container">
          <div className="cart-header">
            <span>오져스 배송</span>
            <span className="cart-header__info">
              &#42;새벽배송이나 주간배송으로 산지직송 상품을 주문하시는경우
              산지에서 별도로 직송합니다.
            </span>
          </div>
          {cartData.map((data, index) => (
            <div key={index} className="cart-contants">
              <span className="cart-count">{index + 1}</span>
              <img alt="상품사진" src={data.image_url} />
              <span className="cart-product-name">{data.name}</span>
              <span className="cart-product-count">수량 {data.count}개</span>
              <span className="cart-product-price">
                <b>{Math.floor(data.price).toLocaleString()}</b>원
              </span>
            </div>
          ))}

          <div className="cart-total-price">
            <p>
              상품금액&nbsp;
              <span>{getTotalPrice().toLocaleString()}</span>원 + 배송비&nbsp;
              <span>{(3000).toLocaleString()}</span>원 = 주문금액{' '}
              <span>{(getTotalPrice() + 3000).toLocaleString()}</span>원
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default CheckCart;
