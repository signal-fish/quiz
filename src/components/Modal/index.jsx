import styled from "styled-components";
import { useGlobalContext } from "../../context";
import { mobile} from "../../responsive";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();

  return (
    <Container isModalOpen={isModalOpen}>
      <Wrapper>
        <Title>Congrats!</Title>
        <Text>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </Text>
        <Button onClick={closeModal}>Play Again</Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  transition: 0.6s;
  opacity: ${(props) => (props.isModalOpen ? "1" : "0")};
  z-index: ${(props) => (props.isModalOpen ? "999" : "-1")};
`;

const Wrapper = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 0 10px 30px 10px;

  ${mobile({
    width: "80%",
    height: "auto"
  })}
`;

const Title = styled.h1`
  margin: 20px 0 5px 0;
  font-size: 30px;
  letter-spacing: 2px;
`;

const Text = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 3px;
  background: lightblue;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
export default Modal;
