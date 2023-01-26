import styled from "styled-components"

export const HomeContainer = styled.div`
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 1rem;
    padding: 0 2rem;
    color: ${(props) => props.theme["blue-500"]};

    @media screen and (max-width: 1680px) {
      margin-top: initial;
    }

    h3 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: flex-end;
    }

    @media screen and (max-width: 650px) {
      display: none;
    }
  }
  .copyright {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    @media screen and (max-width: 650px) {
      display: none;
    }
  }
`

export const HomeContentHeader = styled.div`
  display: flex;
  flex-direction: row;
`
