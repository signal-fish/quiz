import styled from "styled-components";
import { useGlobalContext } from "../../context";
import { mobile, tablet, tabletPro, laptop, laptopPro } from "../../responsive";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <Container>
      <Wrapper>
        <Title>Setup Quiz</Title>
        <FormControl>
          <Label htmlFor="amount">number of questions</Label>
          <Input
            type="number"
            name="amount"
            min={1}
            max={50}
            value={quiz.amount}
            onChange={handleChange}
          ></Input>
        </FormControl>
        <FormControl>
          <Label htmlFor="category">category</Label>
          <Select name="category" value={quiz.category} onChange={handleChange}>
            <Option value="sports">sports</Option>
            <Option value="history">history</Option>
            <Option value="politics">politics</Option>
          </Select>
        </FormControl>
        <FormControl>
          <Label htmlFor="difficulty">category</Label>
          <Select
            name="difficulty"
            value={quiz.difficulty}
            onChange={handleChange}
          >
            <Option value="easy">easy</Option>
            <Option value="medium">medium</Option>
            <Option value="hard">hard</Option>
          </Select>
        </FormControl>
        {error && (
          <Container>
            <Error>
              can't generate questions, please try different options
            </Error>
          </Container>
        )}
        <Button type="submit" onClick={handleSubmit}>
          Start
        </Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);

  ${laptopPro({
    width: "50%",
  })}

  ${tablet({
    width: "65%",
  })}

  ${mobile({
    width: "100%",
    boxShadow: "none"
  })}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const FormControl = styled.div`
width: 90%;
display: flex;
flex-direction: column;
margin-bottom: 40px;
`;

const Label = styled.label`
width: 100%;
font-size: 23px;
margin-bottom: 10px;
text-transform: capitalize;
`;

const Input = styled.input`
  width: calc(100% - 10px);
  height: 30px;
  border: none;
  background: lightgray;
  border-radius: 3px;
  padding: 0 5px;
`;

const Select = styled.select`
width: 100%;
  background: lightgray;
  border-radius: 3px;
  height: 30px;
`;

const Option = styled.option``

const Button = styled.button`
width: 90%;
border: none;
border-radius: 3px;
height: 30px;
margin-top: 20px;
font-size: 20px;
background: lightblue;
cursor: pointer;
transition: .3s;
&:hover {
  opacity: .8;
  color: rgba(0, 0, 0, .6)
}
`

const Error = styled.h2`
color: red;
`

export default SetupForm;
