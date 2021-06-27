import React from 'react';
import Header from '../../Component/HeaderComponent/Header';
import Footer from '../../Component/FooterComponent/Footer';
import './Payment.scss';

class Payment extends React.Component {
  goToMain = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <>
        <Header />
        <div className="payment">
          <div className="payment-container">
            <div className="payment-header">
              <span className="payment-header__name">주문완료</span>
              <div>
                <span>01 장바구니</span>
                <span>&gt; 02 배송정보</span>
                <span>&gt; 03 주문결제</span>
                <span className="location">&gt; 04 주문완료</span>
              </div>
            </div>

            <div className="payment-service">
              <div className="payment-message">
                <p>구매가 정상적으로 처리되었습니다.</p>
              </div>
              <div>
                <button onClick={this.goToMain}>메인으로 가기</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default Payment;
