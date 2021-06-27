import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-menu">
            <ul>
              <li>
                <a href="#">매장안내</a>
              </li>
              <li>
                <Link to="/comments">멤버소개</Link>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h3>오져스 고객센터</h3>
            <div className="footer-content__info">
              <strong>1577-1577</strong>
              <span>평일 07 : 00 ~ 22 : 00</span>
              <span>토요일 09 : 00 ~ 15 : 00</span>
              <span>일요일 09 : 00 ~ 18 : 00</span>
              <span>점심시간 12 : 00 ~ 13 : 00</span>
              <div className="sns-link">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-line"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
            <div className="footer-info">
              <address>
                본사 주소 : 서울특별시 강남구 삼성동 테헤란로 427 10층 큰방
              </address>
              <ul>
                <li>상호 : 주식회사 오져스</li>
                <li>대표자 : 오저수</li>
                <li>사업자 번호 : 123-45-67890</li>
                <li>Comment : 200 OK 기원</li>
              </ul>
              <span>Copyright &copy; OJUS.Corp All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
