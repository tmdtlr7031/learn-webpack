// webpack 옵션들 관리
var path = require('path'); // node.js의 path 라이브러리를 가져옴

module.exports = {
  mode: 'none',
  entry: './src/index.js', // 대상 파일
  output: { // 결과 파일 이름,위치
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};