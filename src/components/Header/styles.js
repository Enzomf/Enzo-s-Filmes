import styled from "styled-components";

const HeaderC = styled.header`
  width: 100%;
  height: 13vh;
  // background-color: #000000;
  padding: 1.8em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 800px) {
    margin-bottom: 1em;

    .navbarPc{
        display: none;
    }
  }
`;


const SeachWrapper = styled.form`
  display: flex;
  gap: 1em;
  width: 350px;

  .search {
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
`;
const SeachBar = styled.input`
  width: 100%;
  background-color: transparent;
  border: #ffff 1px solid;
  padding: 0.5em;
  font-size: 1.2em;
  outline: none;
  color: #ffff;
  line-height: 1.3em;
  &::placeholder {
  }
`;

export {
  HeaderC,
  SeachBar,
  SeachWrapper,
};
