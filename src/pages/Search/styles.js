import styled from "styled-components";

const Container = styled.div`

  display: grid; /* 1 */
  grid-template-columns: repeat(auto-fill, 175px); /* 2 */
  grid-gap: 1rem; /* 3 */
  justify-content: space-between;
  min-height: 30vh;
  

`

export default Container