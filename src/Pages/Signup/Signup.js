import React, { Component } from 'react';
import Header from '../../Component/HeaderComponent/Header';
import Footer from '../../Component/FooterComponent/Footer';
import DaumPostCode from 'react-daum-postcode';
import { validateId } from '../../Utill/validaters';
import { validateIdColor } from '../../Utill/validaters';
import { validatePw } from '../../Utill/validaters';
import { confirmPassword } from '../../Utill/validaters';
import { validateEmail } from '../../Utill/validaters';
import { validatePhone } from '../../Utill/validaters';
import { GET_SIGNUP_API, GET_ID_CHECK_API } from '../../Utill/config';
import './Signup.scss';

// 주소창 style
const POST_WIDTH = 600;
const POST_HEIGHT = 450;
const POST_STYLE = {
  position: 'absolute',
  zIndex: '100',
  border: '1px solid #333333',
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identity: '',
      password: '',
      rePassword: '',
      isAvailedPassword: '',
      name: '',
      phone: '',
      email: '',
      firstAddress: '',
      secondAddress: '',
      isDaumPost: false,
    };
  }

  //id , pw, name , phone , email, address value값 지정
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //id 중복체크
  checkDuplicateId = event => {
    event.preventDefault();
    fetch(`${GET_ID_CHECK_API}`, {
      method: 'POST',
      body: JSON.stringify({
        identity: this.state.identity,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('사용 가능한 아이디 입니다.');
        } else if (result.message === 'IDENTITY_ALREADY_EXISTS') {
          alert('이미 존재하는 아이디 입니다.');
          this.setState({ identity: '' });
        }
      });
  };

  //주소
  handleOpenPost = () => {
    this.setState({
      isDaumPost: true,
    });
  };
  // daum api 불러오기
  handleAddress = data => {
    let allAddress = data.address;
    let extraAddress = '';
    // let zoneCodes = data.zonecode;
    if (data.addressType === 'R') {
      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        //공동주택제한일 경우 if안에  && data.apartment === 'Y' 추가
        extraAddress +=
          extraAddress !== '' ? ', ' + data.buildingName : data.buildingName;
        // extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      allAddress += extraAddress !== '' ? `(${extraAddress})` : ''; //템플릿 리터럴 표현
    }
    this.setState({
      firstAddress: allAddress,
    });
  };

  //회원가입버튼
  signUpSummit = e => {
    e.preventDefault();
    if (this.state.identity === '' || !validateId(this.state.identity)) {
      alert('아이디를 확인해주세요');
    } else if (
      this.state.password === '' ||
      !validatePw(this.state.password) ||
      !confirmPassword(this.state.password, this.state.rePassword)
    ) {
      alert('비밀번호를 확인해주세요');
    } else if (this.state.name === '') {
      alert('이름을 확인해주세요');
    } else if (this.state.phone === '' || !validatePhone(this.state.phone)) {
      alert('휴대폰 번호를 확인해주세요');
    } else if (this.state.email === '' || !validateEmail(this.state.email)) {
      alert('이메일을 확인해주세요');
    } else if (this.state.firstAddress === '') {
      alert('주소를 확인해주세요');
    } else {
      this.clickSignup();
    }
  };

  //백엔드 통신
  clickSignup = () => {
    fetch(`${GET_SIGNUP_API}`, {
      method: 'POST',
      body: JSON.stringify({
        identity: this.state.identity,
        password: this.state.password,
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        address: this.state.firstAddress + this.state.secondAddress,
      }),
    }).then(response => {
      if (response.status !== 201)
        return alert(`에러가 발생했습니다. 에러코드 : ${response.status}`);
      alert('가입을 축하드립니다!');
      this.props.history.push('/login');
    });
  };

  render() {
    const { isDaumPost, firstAddress } = this.state;

    return (
      <div>
        <nav className="navi">
          <Header />
        </nav>
        <div className="contents_All">
          <div className="img">
            <img src="/images/adlogo.png" alt="광고사진" className="a_Img" />
          </div>
          <article>
            <div className="head">
              <header>오져스 회원 가입</header>
              <span className="descrip">
                세상을 바꾸겠다는 거창한 철학보다는 한 사람의 작은 바람을 담은
                소비가 가족을 행복하게 하고, 행복한 가족이 모여 행복한 사회를
                만들 수 있다는 단순하고 소박한 가치를 실천합니다.
              </span>
            </div>
            <form className="sing_up">
              <div className="inputBox_Id">
                <input
                  id="identity"
                  type="text"
                  name="identity"
                  onChange={this.handleInputChange}
                  placeholder="아이디 (7~12 자 , Only 영문 숫자 조합)"
                />
                <button
                  className="btnId"
                  style={{
                    backgroundColor: validateIdColor(this.state.identity)
                      ? '#6ca437'
                      : '#d2f7d2',
                  }}
                  disabled={!validateId(this.state.identity)}
                  onClick={this.checkDuplicateId}
                >
                  중복체크
                </button>
              </div>
              <p className="errMsg">
                {!validateId(this.state.identity)
                  ? '아이디 형식이 올바르지 않습니다.'
                  : ''}
              </p>

              <div className="inputBox_Pw">
                <input
                  id="password"
                  name="password"
                  onChange={this.handleInputChange}
                  type="password"
                  placeholder="비밀번호 (8~18 자, 대소문자 숫자 특수문자 모두 포함)"
                />
                <p className="errMsg">
                  {!validatePw(this.state.password)
                    ? '비밀번호(8~18 자, 대소문자 숫자 특수문자 모두 포함) 형식이 올바르지 않습니다.'
                    : ''}
                </p>
                <input
                  id="rePassword"
                  name="rePassword"
                  onChange={this.handleInputChange}
                  type="password"
                  placeholder="비밀번호확인"
                />

                <p className="errMsg">
                  {confirmPassword(this.state.password, this.state.rePassword)
                    ? ''
                    : '비밀번호가 일치하지 않습니다'}
                </p>
              </div>
              <div className="member_Info">
                <input
                  className="name"
                  name="name"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="이름"
                />
                <input
                  className="phone"
                  name="phone"
                  onChange={this.handleInputChange}
                  type="number"
                  placeholder="휴대폰번호 (-제외 숫자만입력)"
                />
                <p className="errMsg">
                  {!validatePhone(this.state.phone)
                    ? '휴대폰번호 10~11자리 확인해주세요.'
                    : ''}
                </p>

                <input
                  className="email"
                  name="email"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="이메일"
                />
                <p className="errMsg">
                  {!validateEmail(this.state.email)
                    ? '이메일 형식이 올바르지 않습니다.'
                    : ''}
                </p>
              </div>
              <div className="addressBox">
                <div className="cellFirst">
                  <input
                    placeholder="주소"
                    className="main_Address"
                    defaultValue={firstAddress}
                  />
                  <button
                    className="btn-serch"
                    type="button"
                    onClick={this.handleOpenPost}
                  >
                    주소 찾기
                  </button>
                  {isDaumPost && (
                    <DaumPostCode
                      onComplete={this.handleAddress}
                      autoClose
                      width={POST_WIDTH}
                      height={POST_HEIGHT}
                      style={POST_STYLE}
                      isDaumPost={isDaumPost}
                    />
                  )}
                </div>

                <div className="spec_Address">
                  <input
                    type="text"
                    name="secondAddress"
                    placeholder="상세주소"
                    className="second_Address"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className="finish">
                <button className="summit" onClick={this.signUpSummit}>
                  가입하기
                </button>
              </div>
              <div className="rule">
                본인은 만 14세 이상이며,
                <span className="look">
                  <u>오져스 장보기 회원약관</u>
                  <u> 오져스 개인정보보호 정책</u>
                  <u>오져스 전자금융거래약관</u>
                </span>
                의 내용을 확인하였으며, 동의합니다.
              </div>
            </form>
          </article>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Signup;
