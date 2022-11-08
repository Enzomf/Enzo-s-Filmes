import styled from "styled-components"

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 20vh;
    border-radius: 5px;
    border: solid 1px #ffff;
    overflow: hidden;
`

const LeftArea = styled.div`
    width: 40%;
    border-left: hsl(0, 0%, 50%) 1px solid;
    overflow: hidden;
    
    img{
        width: fit-content;
        height: 100%;
    }
`

const ContentArea = styled.div`
    padding: 1em;

    h3{
        color: #FFFF;
    }
`



export { Container, LeftArea, ContentArea }