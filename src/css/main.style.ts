import { styled, keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const MainStyle =`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MyName = styled.p<{ fontWeight: string; textColor: string }>`
  font-size: 48px;
  font-weight: ${({ fontWeight }) => fontWeight};
  background: ${({ textColor }) => textColor};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94); background 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background-size: 200% auto;
	// 위에 선언한 keyframe을 animation에 넣어줌.
  animation: ${gradientAnimation} 5s ease-in-out infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default { MainStyle, MyName };
