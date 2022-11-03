import styled from "styled-components"

const HeaderC = styled.header`
    width: 100%;
    height: 10vh;
    // background-color: #000000;
    padding: 1.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media(max-width: 800px) {
        margin-bottom: 5em;
    }


`
const NavBar = styled.nav`
    position: absolute;
    
    @media (min-width: 801px) {
        margin-right: 150px; 
        left: 7em; 
        
    }
    @media(max-width:800px) {
        display: flex;
        justify-content: center;
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        top: 6em;
    }
`

const NavBarItems = styled.ul`
    display: flex;
    list-style: none;
    gap: 1em;
`

const NavBarItem = styled.li`
    font-size: 1.8em;

    a.nav_link{
    opacity: 0.5;
    }
    a.active.nav_link{
        opacity: 1;
    }
`

const Indicator = styled.div`
  position: absolute;
  top: 33px;
  width: ${({ width }) => `${width}px`};
  left: ${({ left }) => `${left}px`};
  height: 3px;
  background: white;
  transition: all .5s ease-in-out;
`;

const SeachWrapper = styled.form`
    display:flex;
    gap: 1em;
    width: 350px;

    .search{
        background-color: transparent;
        cursor: pointer;
        border: none;
        
    }

`
const SeachBar = styled.input`
    width: 100%;
    background-color: transparent;
    border: #FFFF 1px solid;
    padding:.5em;
    font-size: 1.2em;
    outline: none;
    color: #FFFF;
    line-height: 1.3em;
    &::placeholder{
        
    }


`



export { HeaderC, NavBar, NavBarItems, NavBarItem, Indicator, SeachBar, SeachWrapper }