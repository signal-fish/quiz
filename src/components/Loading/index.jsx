import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <Container>
      <Spinner>
        <Top></Top>
        <Bottom></Bottom>
        <Text>Loading...</Text>
      </Spinner>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Spinner = styled.div`
  width: 90px;
  height: 90px;
  position: relative;
`;

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
    border-width: 6px;
  }
  50% {
    transform: rotate(18deg);
    border-width: 1px;
  }
  100% {
    transform: rotate(360deg);
    border-width: 6px;
  }
`;

const Top = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 6px solid transparent;
  border-top-color: lightblue;
  border-radius: 50%;
  animation: ${Spin} 1.5s linear infinite;
`;

const Bottom = styled(Top)`
  border: 6px solid transparent;
  border-bottom-color: lightgreen;
`;

const Text = styled.p`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 10px;
  margin: 0;
  padding: 0;
  left: 11px;
  top: 36px;
  color: #61c1fc;
  font-weight: 600;
`;

export default Loading;
