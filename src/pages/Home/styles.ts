import styled from "styled-components"

export const HomeContainer = styled.div`
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 1rem;
    padding: 0 2rem;
    color: ${(props) => props.theme["blue-500"]};
    margin-bottom: 1rem;

    @media (min-width: 1080px) {
      font-size: 0.75rem;
    }

    /* @media screen and (max-width: 1680px) {
      margin-top: initial;
    } */

    h3 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: flex-end;
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
