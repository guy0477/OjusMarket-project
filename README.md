### 🌽 O Jus Maket (오져스 마켓) **Team**  
<배포 주소 : http://3.133.13.238:8000/ >

**개발인원 (7명)**  <😁 내가 구현한 page : Login/Sighup page , RecipeInfo page >

[Frontend](https://github.com/wecode-bootcamp-korea/21-1st-Ojusmarket-frontend) | 김명준, 김민기, 이기완

[Backend](https://github.com/wecode-bootcamp-korea/21-1st-Ojusmarket-backend) | 박준영, 박지우, 장동국, 현상협

> _"소통은 무조건 중요하다! 사랑해요 오저스마켓팀" - ojusmarket -_

**개발기간**

2021.06.07 ~ 2021.06.18

---

### ✔오아시스마켓 클론 프로젝트 선정이유

커머스사이트의 다양한 회원가입, 결제, 배송 서비스들이 실제 구현되어있는것에 도전의식을 느꼈고,

레시피가 제공 될 뿐만아니라 레시피에 사용된 제품추천 기능 모델링에 호기심을 느끼며 직접 구현 해 보고자 선정하게 되었습니다.

### ✔️오저스마켓 프로젝트 소개

오아시스마켓의 깔끔한 디자인과 서비스를 변형하여 클론한 "오저스마켓" 입니다!

오아시스 마켓이 제공하는 판매상품들로 적용할 수 있는 레시피의 연결성에 주목하였고, 메인페이지에서 “주문도하고 요리도하고” 탭을 추가적으로 구현하여 기존 오아시스마켓과 서비스기획의 중점을 달리하여 클론하였습니다.

결제서비스를 제외한 영상에서 보이는 부분들은 모두 실제 사용할 수 있는 서비스 수준으로 초기세팅부터 백앤드 연결까지 구현하였습니다.

## 🔎 적용 기술 및 구현 기능

### 적용 기술

>

- ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
- ![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

### 로그인/ 회원가입

- 정규표현식사용하여 유효성검사 적용
- fetch 받은 데이터를 이용하여 아이디 중복체크검사 적용
- 카카오 POST API를 사용하여 주소창 구현
- ![KAKAO POST](https://user-images.githubusercontent.com/74660207/122675951-cc156600-d216-11eb-87bd-ad28d2590dc5.PNG)

### 메인페이지

- 배너 자동 무한 슬라이더 구현
- 캐러셀 기능 추가
- Advanced Router를 통해 카테고리 변경 (Query Parameter 사용)

### 상세페이지 (제품,요리레시피)

- 상세정보를 fetch메소드로 전달받아 상세페이지 구현
- 동적 라우팅 (Path Parameter 사용) 으로 리스트페이지와 연결

### 장바구니

- map 함수와 spread-operator를 사용, 상품 데이터의 수량 변경 기능 구현
- spread-operator와 map, filter, Array메소드를 적절히 사용하여 물품 선택, 삭제 구현
- filter를 사용하여 백엔드에 보낼 삭제된 물품 데이터와 view에 비출 남은 물품들의 데이터를 분류

### 배송지페이지

- 유저의 주소정보를 fetch 받아 기본배송지 구현

### 결제페이지

- 장바구니로 부터 location.state로 데이터를 전달받아 구매 목록 구현
- 구매자의 배송지 와 총 구매가격을 구매자에게 알려주는 UI구현

## Reference

- 이 프로젝트는 [오아시스 마켓](https://www.oasis.co.kr/main) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
