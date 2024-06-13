import styled from "styled-components";
const TitleStyled = styled.h1`
color: white;
font-size: 6vh;
`
function Title({title}){
    return <TitleStyled>{title}</TitleStyled>
}
export default Title;