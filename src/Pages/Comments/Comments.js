import React from 'react';
import Footer from '../../Component/FooterComponent/Footer';
import Header from '../../Component/HeaderComponent/Header';
import Comment from '../Comments/Comment';
import './Comments.scss';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    fetch(`/Data/memberComments.json`)
      .then(response => response.json())
      .then(data => this.setState({ comments: data }));
  }

  render() {
    const { comments } = this.state;
    return (
      <>
        <Header />
        <div className="member-comments">
          <div>
            <ul>
              <li className="comments">
                <div>번호</div>
                <div>고객만족도</div>
                <div>구매후기</div>
                <div>작성자</div>
                <div>작성일</div>
              </li>
              {comments &&
                comments.map((comment, index) => (
                  <Comment
                    id={comment.id}
                    key={index}
                    member={comment.member}
                    comment={comment.comment}
                  />
                ))}
            </ul>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Comments;
