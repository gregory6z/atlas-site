import styled from "styled-components"

export const AtlasContainer = styled.div`
  width: 20%;
  text-align: center;
  margin-top: 5%;

  p {
    font-size: 1.6rem;
    font-weight: 500;
  }

  h1 {
    margin-top: 1rem;
    font-size: 2.5rem;
  }

  .horaires {
    color: ${(props) => props.theme["blue-500"]};

    margin-block: 0.5rem;

    p {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  .imgContainer {
    width: 80%;
    height: 44vh;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
      object-position: 0 1.5rem;
    }
  }
`
