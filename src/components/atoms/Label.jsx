import styled from "styled-components";
const LabelStyled= styled.p`
color: white;
font-size: 3vh;
`
function Label({text}){
    return <LabelStyled>{text}</LabelStyled>
}
export default Label;