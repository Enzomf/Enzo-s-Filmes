import styled from "styled-components";

const Container = styled.div`

  overflow: hidden;

  @media (min-width: 661px) {
    display: grid; /* 1 */
    grid-template-columns: repeat(auto-fill, 190px); /* 2 */
    grid-gap: 1rem; /* 3 */
    justify-content: space-between;
    min-height: 30vh;
  }

  @media (max-width:660px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

     > div {
      width: 50%;
    }
  }

  

`

export default Container