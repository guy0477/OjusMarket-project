import { Component } from 'react';
import Product from '../Product/Product';
import './ProductList.scss';

class ProductList extends Component {
  render() {
    const { recipeData } = this.props;

    return (
      recipeData && (
        <div className="relatedProduct">
          {recipeData.related_ingredients &&
            recipeData.related_ingredients.map(recipe => (
              <Product
                key={recipe.id}
                id={recipe.id}
                image={recipe.image_url}
                name={recipe.name}
                price={recipe.price}
              />
            ))}
        </div>
      )
    );
  }
}

export default ProductList;
