import Score from "./components/Score"
import styled from "styled-components"
import Global from "./styles/Global"


function App() {

  const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 6em;
    margin: 2em;
  `;

  return (
    <div>
      <Global />
      <Main>
        <Score title="HOME"/>
        <Score title="GUEST"/>
      </Main>
    </div>
  )
}

export default App
