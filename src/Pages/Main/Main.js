import React from 'react';
import { GET_PRODUCT_API } from '../../Utill/config';
import Header from '../../Component/HeaderComponent/Header';
import Slider from './slider/Slider';
import Food from './Food/Food';
import Recipe from './Recipe/Recipe';
import Footer from '../../Component/FooterComponent/Footer';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      changeTap: 'ingredients',
      productList: [],
      storageLabel: '',
      slideImgList: [],
    };
  }

  handleTap = event => {
    this.setState({
      changeTap: event.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.changeTap !== this.state.changeTap)
      fetch(`${GET_PRODUCT_API}/${this.state.changeTap}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            productList: data,
          });
        });

    if (prevProps.location.search !== this.props.location.search)
      fetch(
        `${GET_PRODUCT_API}/${this.state.changeTap}${this.props.location.search}`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            productList: data,
          });
        });
  }
  componentDidMount() {
    const path = this.state.changeTap;
    fetch(`${GET_PRODUCT_API}/${path}`)
      .then(res => {
        if (res.status !== 200)
          return alert(
            `페이지를 불러오지 못했습니다. 에러코드 : ${res.status}`
          );
        return res.json();
      })
      .then(data => {
        this.setState({
          productList: data,
        });
      });

    fetch('/Data/SlideData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          slideImgList: data.slideImg,
        });
      });
  }

  filterFoodCategory = e => {
    const query = `category_id=${e.target.value}`;
    this.props.history.push(`?${query}`);
  };

  filterRecipeCategory = e => {
    const query = `category_id=${e.target.value}`;
    this.props.history.push(`?${query}`);
  };

  render() {
    const { productList } = this.state;
    return (
      <>
        <Header />
        <div className="main">
          <Slider slideImgList={this.state.slideImgList} />
          <div>
            <div className="product-container">
              <div className="product-selection">
                <div>
                  <button value={'ingredients'} onClick={this.handleTap}>
                    주문도하고
                  </button>
                </div>
                <div>
                  <button value={'recipes'} onClick={this.handleTap}>
                    요리도 하고
                  </button>
                </div>
              </div>
            </div>
            <div>
              {productList.ingredients && (
                <Food
                  productList={this.state.productList}
                  storageLabel={this.state.storageLabel}
                  filterFoodCategory={this.filterFoodCategory}
                />
              )}
              {productList.recipes && (
                <Recipe
                  recipeList={this.state.productList}
                  filterRecipeCategory={this.filterRecipeCategory}
                />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
