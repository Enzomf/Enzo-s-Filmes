import styled from "styled-components"

    const MidiaSection = styled.section`
    width: 100%;
    margin: 2em 0 2em 0 ;
    `
const Midiacard = styled.div`
    width: 150px;
    height: 200px;
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
    width: 100%;
    height: 100%;
    `
    const SectionTitle = styled.h1`
        color: #FFFF;
        margin-bottom: 0.8em;
    `

export { Midiacard, MidiaRating, Image, SectionTitle, MidiaSection }