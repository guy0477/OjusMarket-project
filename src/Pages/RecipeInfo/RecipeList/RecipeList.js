import { Component } from 'react';
import Cook from '../Cook/Cook';

class RecipeList extends Component {
  render() {
    const { recipeData } = this.props;
    return (
      <div>
        <Cook recipeData={recipeData} />
      </div>
    );
  }
}

export default RecipeList;
