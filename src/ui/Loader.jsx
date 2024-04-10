import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const LoaderContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(203, 213, 221, 0.2);
  backdrop-filter: blur(8px);
`;

const LoaderEl = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 6px solid #fff;
  border-right: 6px solid #fff;
  border-bottom: 6px solid #fff;
  border-left: 8px solid #00bc77;
  background: transparent;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
function Loader() {
  return (
    <LoaderContainer>
      <LoaderEl />
    </LoaderContainer>
  );
}

export default Loader;
