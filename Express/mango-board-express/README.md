# mango-board-server


## 게시판 만들기

### 리액트, Expressjs 이용하여 구축하기
#### express generator
- [express genetator npm 사이트 바로가기](https://www.npmjs.com/package/express-generator)
#### 리액트 CLI 사용

1. express generator를 이용하여 서버를 구축
- express generator로 구축된 app.js 에 Router 구축하기
- routes 폴더 따로 만들어서 articles api 구축하기
- db는 아무거나 상관없음. 샘플코드는 sqlite로 구성됨
- express와 db 연결 방법은 [express db 연결 관련 사이트 바로가기](https://expressjs.com/en/guide/database-integration.html) 사이트 참조




2. 홈페이지 / 게시판 만들기
- React 디렉토리구조를 Components 와 Containers로 나누고, Containers에는 데이터 처리 컴포넌트 Components에는 프레젠테이션 컴포넌트를 구성할것
- 제이쿼리 사용 x
- 기본적인 게시물작성, 글 수정, 삭제 crud 가능하게 할것
- http 통신은 axios를 이용
- 페이징 처리가 가능해야함(백엔드에서 페이징 처리해야됨)
- 상단 navbar를 만들고 그곳에 combo box로 게시물 갯수 설정할수 있도록 할것(예를들어, 콤보박스에서 10을 선택하면 게시물 10개씩 20이면 20개씩 필터링되는것)
