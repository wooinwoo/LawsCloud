import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Title = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <h1 onClick={() => navigate("/main")} style={{cursor: "pointer"}}>
        Laws Cloud
      </h1>
      <img
        onClick={() =>
          navigate("/bills", {
            state: {
              inputValue: "",
              age: 21,
            },
          })
        }
        src="/icons/searchIcon.svg"
        alt="검색"
        style={{cursor: "pointer"}}
      />
    </Header>
  );
};

export default Title;

const Header = styled.header`
  /* --title-between: 200px; */
  min-width: 320px;
  display: flex;
  height: 70px;
  position: relative;
  align-items: center;
  justify-content: center;

  h1 {
    /* margin-left: calc(62px + var(--title-between)); */
    text-align: center;
    font-weight: 800;
  }
  img {
    /* margin-left: var(--title-between); */
    position: absolute;
    margin-left: min(calc(200px + 25vw), 500px);
    height: 25px;
  }
`;
