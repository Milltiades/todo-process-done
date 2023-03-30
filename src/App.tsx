import { useState } from "react";
import styled from "styled-components";

function App() {



  const [firstArray, setFirstArray] = useState<number[]>([]);
  const [secondArray, setSecondArray] = useState<number[]>([]);
  const [thirdArray, setThirdArray] = useState<number[]>([]);

  const handleClickTodo = (index: number) => {
    const removedItem = firstArray.splice(index, 1)[0];
    setSecondArray([...secondArray, removedItem]);
    setFirstArray([...firstArray]);
  }

  const handleClickProcess = (index: number) => {
    const removedItem = secondArray.splice(index, 1)[0];
    setThirdArray([...thirdArray, removedItem]);
    setSecondArray([...secondArray]);
  }

  const handleClickFinish = (index: number) => {
    const removedItem = thirdArray.splice(index, 1)[0];
    setThirdArray([...thirdArray])
  }
  

  const handleClickAdd = () => {
    setFirstArray([...firstArray, firstArray.length+1])
  }
  return (
    <MainDiv className="App">
      
      <Div1>
        <ButtonAdd onClick={() => handleClickAdd()}>Add work</ButtonAdd>
        <h1>To do</h1>
        {firstArray.map((item, index) => {
          return (
            <Item
            key={index}>
              <Button onClick={() => handleClickTodo(index)}> Start doing {item}</Button>
            </Item>
          )
        })}
        
      </Div1>
      <Div1>
      <h1>In process</h1>
        {secondArray.map((item, index) => {
          return (
            <Item key={index}>
              <Button onClick={() => handleClickProcess(index)}> Finished {item}</Button>
            </Item>
          )
        })}
        
      </Div1>
      <Div1>
      <h1>Finished</h1>
        {thirdArray.map((item, index) => {
          return (
            <Item key={index}>
              <Button onClick={() => handleClickFinish(index)}> Delete {item}</Button>
            </Item>

          )
        })}
        
      </Div1>
     
    </MainDiv>
  );
}

export default App;

const MainDiv = styled.div`
  height: auto;
  background: #afaeae;
  border-radius: 10px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2%;
  padding: 2%;
  
  @media (max-width: 420px) {
    flex-direction: column;
    padding: 10px;
    justify-content: flex-start;
    gap: 0;
    height: auto;
   ;
    
    
  }
`;

const Div1 = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 10px;
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 3%;
  /* margin-bottom: 15px; */
  @media (max-width:420px){
    gap: 0;
    margin-bottom: 15px;
    width: 95%;
  }
 
`;

const Item = styled.div<any>`
  width: 100%;
  background: darkgray;
  height: 100px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  @media (max-width:420px) {
    margin-top: 10px;
    height: 70px;
  }
`;


const Button = styled.button`
  border-radius: 10px;
  background: white;
  color: black;
  cursor: pointer;
  transition: all .3 ease;
  padding: 10px 20px;
  border: none;
  &:hover {
    background: #808080;
    color: white;
  }
`

const ButtonAdd = styled(Button)`
width: 30%;
background: #808080;
color: white;
&:hover {
    background: #525252;
  }
`