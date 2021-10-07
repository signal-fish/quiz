import styled from "styled-components";
import SetupForm from "./components/SetupForm";
import Modal from "./components/Modal";
import Loading from "./components/Loading";
import { useGlobalContext } from "./context";
import { mobile, tablet, laptop, laptopPro } from "./responsive";

const App = () => {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if (waiting) {
    return (
      <Container>
        <SetupForm />
      </Container>
    );
  }

  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);

  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <Container>
      <Modal></Modal>
      <AnsweringPage>
        <Correct>
          correct answers: {correct} / {index}{" "}
        </Correct>
        <Question>{question}</Question>
        <Answers>
          {answers.map((answer, index) => {
            return (
              <Answer
                key={index}
                onClick={() => checkAnswer(correct_answer === answer)}
              >
                {answer}
              </Answer>
            );
          })}
        </Answers>
        <NextQuestionWrapper>
          <NextQuestion onClick={nextQuestion}>Next Question</NextQuestion>
        </NextQuestionWrapper>
      </AnsweringPage>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnsweringPage = styled.div`
  width: 50%;
  height: auto;
  padding: 0 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  ${laptopPro({
    width: "60%",
  })}

  ${laptop({
    width: "70%",
  })}

  ${tablet({
    width: "80%",
  })}

  ${mobile({
    width: "100%",
    padding: "0 20px",
    boxShadow: "none"
  })}
`;

const Correct = styled.p`
  font-size: 20px;
  text-align: right;
  text-transform: capitalize;
  color: green;

  ${mobile({
    textAlign: "center"
  })}
`;

const Question = styled.h1`
  font-size: 40px;

  ${mobile({
    fontSize: "25px",
  })}
`;

const Answers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Answer = styled.button`
  width: 50%;
  height: 35px;
  margin: 10px 0;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;
  background: lightskyblue;

  &:hover {
    opacity: 0.8;
  }

  ${laptop({
    width: "70%",
  })}

  ${tablet({
    width: "80%",
  })}
`;

const NextQuestionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  ${mobile({
    justifyContent: "center"
  })}
`;

const NextQuestion = styled.button`
  width: 20%;
  height: 45px;
  margin: 10px 0 20px 0;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;
  background: lightskyblue;
  font-size: 20px;

  &:hover {
    opacity: 0.8;
  }

  ${laptop({
    width: "25%",
  })}

  ${tablet({
    width: "30%",
  })}

  ${mobile({
    fontSize: "16px",
    width: "60%",
  })}
`;

export default App;
