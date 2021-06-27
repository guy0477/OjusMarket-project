import React from 'react';
import './Reviews.scss';

class Reviews extends React.Component {
  render() {
    return (
      <div className="reviews">
        <div>
          <img
            alt="배너사진"
            src="https://www.oasis.co.kr/images/shop/prod_txt_01.jpg"
          />
        </div>
        <div>
          <ul>
            <li className="li-header">
              <div>번호</div>
              <div>고객만족도</div>
              <div>구매후기</div>
              <div>작성자</div>
              <div>작성일</div>
            </li>
            <li>
              <div>447</div>
              <div>★★★★★</div>
              <div>
                아이가 좋아해서 자주 구매하고 있어요. 다양한 간식을 먹일수
                있어서 좋아요.
              </div>
              <div>blues*** </div>
              <div>2021.06.08</div>
            </li>
            <li>
              <div>446</div>
              <div>★★★★★</div>
              <div>
                빠른 배송에 감사드립니다 아침에 이렇게 긴선한 음식을 받을 수
                있는게 코로나시대에 느끼는 큰 행복입...
              </div>
              <div>so539*</div>
              <div>2021.06.08</div>
            </li>
            <li>
              <div>445</div>
              <div>★★★★★</div>
              <div>
                사실 제가 먹으려구 구입했는데... 신랑이 홀랑 다먹어버렸어요..
                맛도 못봤네요ㅜㅜ
              </div>
              <div>ra402****</div>
              <div>2021.06.08</div>
            </li>
            <li>
              <div>444</div>
              <div>★★★★★</div>
              <div>
                다양한 과일 종류들을 간편하게 먹을 수 있어서 좋더라구요!
              </div>
              <div>herin**</div>
              <div>2021.06.08</div>
            </li>
          </ul>
          <div className="page">
            <a src="#">1</a>
            <a src="#">2</a>
            <a src="#">3</a>
            <a src="#">4</a>
            <a src="#">5</a>
            <a src="#">6</a>
            <a src="#">7</a>
            <a src="#">8</a>
            <a src="#">9</a>
            <a src="#">10</a>
            <a src="#" className="next-page-btn">
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Reviews;
