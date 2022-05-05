const quotes = [
  {
    quote:
      "자연은 결코 우리를 속이지 않는다. 우리를 속이는 것은 언제나 우리 자신이다.",
    author: "장 자크 루소",
  },
  {
    quote:
      "자연의 극치는 사랑이다. 사랑에 의해서만 사람은 자연에 접근할 수 있다.",
    author: "요한 볼프강 폰 괴테",
  },
  {
    quote: "산은 마음의 고요와 고상함이요, 큰 산은 높은 덕이 솟은 것 같다.",
    author: "팔만대장경",
  },
  { quote: "자연은 비약하지 않는다.", author: "찰스 로버트 다윈" },
  { quote: "자연을 먼저 터득한 사람은 성인이다.", author: "공자" },
  { quote: "자연은 신의 예술품이다.", author: "단테 알리기에리" },
  {
    quote: "자연과 조화롭게 살아가는 것이 삶의 목적이다.",
    author: "키프로스의 제논",
  },
  {
    quote:
      "자연의 도는 말로써 표현할 수 없고 자연의 덕은 인위적인 노력으로 이룰 수 없다.",
    author: "장자",
  },
  {
    quote: "예술에는 오류가 있을지 모르나, 자연에는 잘못이 없다.",
    author: "존 드라이든",
  },
  {
    quote:
      "자연은 우리를 위해 있는 것이 아니라 우리의 소중한 한 부분이며 지구 공동체의 한 가족이며 동반자이니라.",
    author: "인디언 격언",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
