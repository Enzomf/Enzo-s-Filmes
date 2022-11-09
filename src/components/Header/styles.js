import styled from "styled-components";

const HeaderC = styled.header`
  width: 100%;
  height: 13vh;
  padding: 1.8em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 2em;

  @media (max-width: 800px) {
    margin-bottom: 1em;

    header nav.hide {
    display: none;
    }
  }
`;

const LeftHeader = styled.div`
  display:"flex";
  align-items:"center";

`


const SeachWrapper = styled.form`
  display: flex;
  gap: 1em;
  align-items: center;

  .search {
    background-color: transparent;
    font-size: 1.8em;
    transform: translateX(-25px);
    cursor: pointer;
    border: none;
  }

 .icon {
    font-size: 1.5em;
    color:#FFFF;
    cursor: pointer;
    transition: .2s ease;
  }

  .icon:hover{
    color: #1976d2;
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
  LeftHeader
};
