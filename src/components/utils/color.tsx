// 리액트 라이브러리

// 리액트 컴포넌트

// * 본문

function RandomGradientColor() {
  const color1 = GenerateRandomRGB();
  const color2 = GenerateRandomRGB();

  const gradient = `linear-gradient(to right, ${color1}, ${color2})`;

  return gradient;
}

function GenerateRandomRGB() {
  // 0부터 255 사이의 무작위 정수 생성

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

export default RandomGradientColor;
