import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LOGIN_TOKEN } from '../../Utill/config';
import './Header.scss';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    };
  }
  goToMain = () => {
    this.props.history.push(`/`);
  };

  getLogOut = () => {
    const loginInfo = localStorage.getItem(`LII`);
    if (!loginInfo) {
      this.props.history.push('/login');
    } else {
      localStorage.removeItem(`LII`);
      alert('로그아웃 되었습니다.');
      this.props.history.push('/login');
    }
  };

  render() {
    return (
      <header className="header-container">
        <div className="header__menu">
          <div className="header-sub__menu">
            <ul>
              <li>
                <a href="#">마이페이지</a>
              </li>
              <li>
                <a href="#">고객센터</a>
              </li>
            </ul>
          </div>
          <div className="header-main__menu">
            <ul>
              <li>
                <button onClick={this.getLogOut}>
                  {`${!localStorage.getItem('LII') ? '로그인' : '로그아웃'}`}
                </button>
              </li>
              <li>
                <Link to="/signup">회원가입</Link>
              </li>
              <li>
                <Link to="/comments">베스트후기</Link>
              </li>
              <li>
                <a href="#">주문/배송조회</a>
              </li>
              <li>
                <Link to="/cartlist">장바구니</Link>
              </li>
            </ul>
          </div>
        </div>
        <img
          src="/images/logo.png"
          alt="ojus-market logo"
          onClick={this.goToMain}
        />
        <div className="search-container">
          <form action="#" className="search-box">
            <input type="text" placeholder="바른 먹거리를 찾으세요?" />
            <button className="search-button">
              <i className="fas fa-search fa-lg"></i>
            </button>
          </form>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
