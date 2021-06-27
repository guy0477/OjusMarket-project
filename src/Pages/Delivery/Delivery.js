import React from 'react';
import { GET_DELIVERY_API, LOGIN_TOKEN } from '../../Utill/config';
import Header from '../../Component/HeaderComponent/Header';
import Footer from '../../Component/FooterComponent/Footer';
import { Link, withRouter } from 'react-router-dom';
import BasicInfo from './BasicInfo';
import './Delivery.scss';

class Delivery extends React.Component {
  constructor() {
    super();
    this.state = {
      changeInfo: 0,
      userName: '',
      userPhone: '',
      userAddress: '',
    };
  }

  handleTap = id => {
    this.setState({
      changeInfo: id,
    });
  };

  handleSubmit = e => {
    this.props.history.push({
      pathname: '/purchase',
      state: this.props.location.state,
    });
  };

  componentDidMount() {
    fetch(`${GET_DELIVERY_API}`, {
      method: 'GET',
      headers: {
        Authorization: `${LOGIN_TOKEN}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          userName: data.user[0].name,
          userPhone: data.user[0].phone,
          userAddress: data.user[0].address,
        });
      });
  }

  render() {
    return (
      <>
        <Header />
        <div className="delivery">
          <div className="delivery-container">
            <div className="delivery-header">
              <span className="delivery-header__name">배송정보</span>
              <div>
                <span>01 장바구니</span>
                <span className="location">&gt; 02 배송정보</span>
                <span>&gt; 03 주문결제</span>
                <span>&gt; 04 주문완료</span>
              </div>
            </div>

            <div className="head-line">
              <span>&#42;주문자 정보</span>
            </div>
            <div className="user-info-container">
              <div>
                <label>보내시는 분</label>
                <input
                  name="userName"
                  defaultValue={this.state.userName}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div>
                <label>연락처</label>
                <input
                  name="userPhone"
                  defaultValue={this.state.userPhone}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>

            <div className="head-line">
              <span>&#42;배송지 주소</span>
            </div>
            <div className="address">
              <div className="address-selection">
                <div>
                  <span>기본 배송지</span>
                </div>
              </div>
              <div>
                <BasicInfo
                  userName={this.state.userName}
                  userPhone={this.state.userPhone}
                  userAddress={this.state.userAddress}
                />
              </div>
              <div className="package-recall">
                <h4>
                  포장재 회수 요청
                  <span>
                    &nbsp;(택배의 경우 택배사 사정으로 인하여 포장재를 회수하지
                    않습니다.)
                  </span>
                </h4>
                <p>
                  택배의 경우 택배사 사정으로 인하여 포장재를 회수하지 않습니다.
                </p>
                <div className="corona-notice">
                  <div className="notice-header">
                    <div className="notice-image">
                      <i className="fas fa-bullhorn"></i>
                    </div>
                    <h5>알려드립니다.</h5>
                  </div>
                  <div className="notice-contents">
                    <p>
                      코로나 19 상황이 장기화됨에 따라 고객 여러분의 안전과
                      예방을 위해 재활용 박스 회수 서비스를 잠정 중단하게
                      되었으니
                      <br></br>
                      <br></br> 많은 양해 바랍니다.
                    </p>
                    <p>박스는 재활용이 가능하니 종이류로 배출하시면 됩니다.</p>
                  </div>
                </div>
              </div>
              <div className="submit">
                <button onClick={this.handleSubmit}>주문서 작성 완료</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default withRouter(Delivery);
