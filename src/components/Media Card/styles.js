import styled from "styled-components"

const MediaCardC = styled.div`
    width: 200px;
    height: 250px;
    position: relative;

`
const MediaRating = styled.div`
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
    export { MediaCardC, MediaRating, Image }