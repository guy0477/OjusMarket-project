import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../../Component/FooterComponent/Footer';
import Header from '../../Component/HeaderComponent/Header';
import RecipeList from './RecipeList/RecipeList';
import ProductList from './ProductList/ProductList';
import { GET_RECIPE_INFO_API, LOGIN_TOKEN } from '../../Utill/config';
import './RecipeInfo.scss';

class RecipeInfo extends React.Component {
  constructor() {
    super();
    this.state = { recipeData: {} };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`${GET_RECIPE_INFO_API}/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `${LOGIN_TOKEN}`,
      },
    })
      .then(res => {
        if (res.status !== 200)
          return alert(`에러가 발생했습니다. 에러코드 : ${res.status}`);
        return res.json();
      })
      .then(res =>
        this.setState({
          recipeData: res.recipe,
        })
      );
  }

  goList = () => {
    this.props.history.push('/');
  };

  render() {
    const { recipeData } = this.state;
    return (
      <div className="recipeInfo">
        <Header />
        <article>
          <div className="foodInfo">
            <RecipeList recipeData={recipeData} />
          </div>
          <p>관련제품</p>
          <div>
            <ProductList recipeData={recipeData} />
          </div>
          <div className="btnBox">
            <button onClick={this.goList} className="goList">
              목록보기
            </button>
          </div>
        </article>
        <Footer />
      </div>
    );
  }
}
export default withRouter(RecipeInfo);
