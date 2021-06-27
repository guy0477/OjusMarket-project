import React from 'react';
import { withRouter } from 'react-router';
import './RelatedList.scss';

class RelatedList extends React.Component {
  constructor(props) {
    super(props);
  }

  goToRecipe = id => {
    this.props.history.push(`/recipeinfo/${id}`);
  };

  render() {
    const { id, image, name } = this.props;
    return (
      <div onClick={() => this.goToRecipe(id)} className="related-image">
        <img className="related-img" src={image} alt="" />
        <span className="imageName">{name.slice(0, 5)}...</span>
      </div>
    );
  }
}

export default withRouter(RelatedList);
