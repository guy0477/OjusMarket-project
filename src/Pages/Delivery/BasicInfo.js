import React from 'react';

class BasicInfo extends React.Component {
  render() {
    const { userName, userPhone, userAddress, handleChange } = this.props;
    return (
      <div className="address-info">
        <div className="reciver-info">
          <input
            id="userName"
            name="userName"
            defaultValue={userName}
            onChange={handleChange}
          />
          <input
            id="userPhone"
            name="userPhone"
            defaultValue={userPhone}
            onChange={handleChange}
          />
        </div>
        <div className="address-input">
          <div className="detailed-address">
            <input
              id="reciverAddress"
              name="userAddress"
              defaultValue={userAddress}
              onChange={handleChange}
            />
            <span>
              배송을 위해 고객님의 주소가 맞는지 다시한번 확인해주세요
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default BasicInfo;
