const quotes = [
  {
    quote: '아무리 훌륭하고 아름다운 말도 행동하지 않으면 보람이 없다.',
  },
  {
    quote: '남의 죄를 자주 드러내지 말라.',
  },
  {
    quote:
      '그 어떤 것도 단지 그것에 관해 얘기를 들었다는 이유만으로 믿어서는 안된다.',
  },
  {
    quote:
      '너가 만약 다른 사람을 위해 램프 불을 켜준다면, 그 램프는 너의 길을 비춰줄 것이다.',
  },
  {
    quote: '고통의 원인은 집착이다.',
  },
  {
    quote: '과거에 얼마나 힘들었던간에, 넌 얼마든지 항상 다시 시작할 수 있다.',
  },
  {
    quote: '행복으로 가는 길은 없다. 행복이 곧 길이다.',
  },
  {
    quote: '과도한 많은 걱정이 불행의 원인이다.',
  },
  {
    quote:
      '너가 진정으로 너 자신을 사랑한다면, 절대로 다른 사람을 해치는 짓은 하지 않을것이다.',
  },
  {
    quote: '모든 생명체에게 친절히 대해라. 그것이 종교다.',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = '- 석가모니';
