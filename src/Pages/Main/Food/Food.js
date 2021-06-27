import React from 'react';
import FoodContent from './FoodContent';
import './Food.scss';

class Food extends React.Component {
  render() {
    const { productList, storage, filterFoodCategory } = this.props;
    return (
      <div className="food-component">
        <div className="food-category">
          <ul>
            <li>
              <button onClick={filterFoodCategory} value={''}>
                전체보기
              </button>
            </li>
            <li>
              <button onClick={filterFoodCategory} value={'1'}>
                농산물
              </button>
            </li>
            <li>
              <button onClick={filterFoodCategory} value={'2'}>
                축산물
              </button>
            </li>
            <li>
              <button onClick={filterFoodCategory} value={'3'}>
                수산물
              </button>
            </li>
            <li>
              <button onClick={filterFoodCategory} value={'4'}>
                양념/면류
              </button>
            </li>
            <li>
              <button onClick={filterFoodCategory} value={'5'}>
                간식/유제품
              </button>
            </li>
            <li>
              <button onClick={filterFoodCategory} value={'6'}>
                간편식품
              </button>
            </li>
          </ul>
        </div>
        <div className="food-header">
          <p>식품</p>
          <span>원하는 시간에 우리집에 쏙~</span>
        </div>
        <div className="food-wrap">
          {productList.ingredients.map(data => (
            <FoodContent
              key={data.id}
              id={data.id}
              ingredients={data}
              storage={storage}
              matchId={this.props.matchId}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Food;
