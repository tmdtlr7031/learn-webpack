# learn-webpack
인프런 캡틴판교 웹팩 강좌

## 강의 교안
- https://joshua1988.github.io/webpack-guide/guide.html

## npm 사용이유 & 장점
1. 라이브러리 버전 관리&의존성 관리가 용이하다. -> 버전 변경이 있는 경우, ```<script>``` 태그 내 src 부분을 일일이 찾아서 변경해줘야하지만, npm으로 관리 시 ```package.json```에 모아놓을 수 있음
2. 간편하게 설치 가능 -> 필요한 라이브러리 설치를 위해 검색해서 들어가는 것 보다 npm 명령어를 통해 간편하게 설치 가능


## 명령어 정리
- ```node -v``` : 노드버전 확인
- ```npm -v``` : npm버전 확인
- ```npm init``` : npm 초기화 명령어로 package.json 파일 생성됨 (-y 붙이면 바로 생성) => init 시 입력 안하고 생성된 package.json 클릭해서 내용 바꿀 수 있기 때문
- ```npm install 라이브러리명 (== npm i 라이브러리명)``` : npm 설치 명령어 (지역설치로 ```--save-prod``` 자동으로 적용됨)
- - 지역설치 옵션 ```--save-dev (== -D)``` : package.json의 ***dependencies , devDependencies*** 구분이 생기고 devDependencies 영역에 설치한 라이브러리 정보 기입됨
> dependencies vs devDependencies 차이
> - dependencies : 화면의 로직과 직접적인 연관이 있는 라이브러리 (리액트, 제이쿼리, Vue, 차트 등..)
> - devDependencies : 운영 배포 시 빠져도 되는 라이브러리들 (웹팩, js-compression, sass 등)
- - ```--global ( == -g)``` : 마지막에 헤딩 명령어 추가 시 전역으로 설치되어 **node_modules** 하위로 들어가지 않음.
- ```npm unstall 라이브러리명``` : npm 삭제 명령어