import { useState } from "react"
import styled from "styled-components"

const Score = ({title}) => {

const [score, setScore] = useState(0);

function onePoint() {
    setScore(() => score + 1)
}

function twoPoints() {
    setScore(() => score + 2)
}

function threePoints() {
    setScore(() => score + 3)
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h2`
    font-family: "Verdana";
    font-size: 4.8em;
    color: #fff;
`

const Number = styled.span`
    margin: .2em 0;
    padding: .3em .7em .1em .7em;
    text-align: center;
    color: #F94F6D;
    background: #000;
    font-size: 9.2em;
    border-radius: .1em;
`

const ScoreBox = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 2em;
`

const Score = styled.button`
    border: 3px solid #9AABD8;
    border-radius: .4em;
    text-align: center;
    padding: .6em;
    cursor: pointer;
    background: transparent;
    color: #9AABD8;
    font-size: 1.9em;
`

  return (
    <Div>
        <Title>{title}</Title>
        <Number>{score}</Number>
        <ScoreBox>
            <Score onClick={onePoint}>+1</Score>
            <Score onClick={twoPoints}>+2</Score>
            <Score onClick={threePoints}>+3</Score>
        </ScoreBox>
    </Div>
  )
}

export default Score