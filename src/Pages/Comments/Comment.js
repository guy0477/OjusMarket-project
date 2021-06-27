import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, comment, member } = this.props;
    return (
      <li>
        <div className="member-id">{id}</div>
        <div>★★★★★</div>
        <div className="member-comment">{comment}</div>
        <div className="member">{member}</div>
        <div>2021.06.08</div>
      </li>
    );
  }
}

export default Comment;
