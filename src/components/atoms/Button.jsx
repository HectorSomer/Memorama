import styled from "styled-components";
const StyledButton=styled.button`
color: white;
background-color: #013220;
width: 30vh;
height: 5vh;
border-radius: 2vh;
`
function Button({onClick}){
    return <StyledButton onClick={onClick}>Reiniciar</StyledButton>
}
export default Button;