import React from 'react';
import { withRouter } from 'react-router-dom';

class RecipeContent extends React.Component {
  clickHandler = id => {
    this.props.history.push(`/recipeinfo/${id}`);
  };

  render() {
    const { recipe } = this.props;
    return (
      <div onClick={() => this.clickHandler(recipe.id)} className="recipe">
        <img alt="요리사진" src={recipe.image_url} />
        <div className="recipe-name">
          <span>{recipe.name}</span>
        </div>
      </div>
    );
  }
}
export default withRouter(RecipeContent);
