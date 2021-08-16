import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import HomePage from './pages/HomePage/HomePage';



const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

function App() {
  return (
    <Container>
<HomePage></HomePage>


    </Container>
  );
}

export default App;
