import React from 'react';
import DetailInfo from './DetailInfo';
import Reviews from './Reviews';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      activeID: 0,
    };
  }

  clickHandleTab = e => {
    const id = parseInt(e.target.id);
    this.setState({ activeID: id });
  };

  render() {
    const tab = {
      0: <DetailInfo />,
      1: <Reviews />,
    };
    return (
      <div className="product-detail-conponent">
        <div className="detail-tab">
          <div>
            <button
              name="info"
              id="0"
              className={!this.state.activeID ? `select-btn` : ''}
              onClick={this.clickHandleTab}
            >
              상품정보
            </button>
          </div>
          <div>
            <button
              name="reviews"
              id="1"
              className={this.state.activeID ? `select-btn` : ''}
              onClick={this.clickHandleTab}
            >
              구매후기
            </button>
          </div>
        </div>
        <div>{tab[this.state.activeID]}</div>
      </div>
    );
  }
}
export default ProductDetail;
