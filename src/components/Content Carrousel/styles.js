import styled from "styled-components"

    const MidiaSection = styled.section`
    width: 100%;
    margin: 2em 0 2em 0 ;
   

    svg{
        width:25px;
        margin: auto 0
    }
    `
const Midiacard = styled.div`
    width: 200px;
    height: 250px;
    position: relative;

`
const MidiaRating = styled.div`
    position: absolute;
    top: 1em;
    right: 1em;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: solid 2px #FFFF;
    display: grid;
    place-items: center;
    background-color: #000000;
    color:#FFFF
`
    const Image = styled.img`
    width: 95%;
    height: 95%;
    `
    const SectionTitle = styled.h2`
        color: #FFFF;
        margin-bottom: 0.5em;
        font-size: 2em;
        font-weight: normal ;
        display: flex;
        align-items: center;
        gap: 0.5em;
    `

export { Midiacard, MidiaRating, Image, SectionTitle, MidiaSection }