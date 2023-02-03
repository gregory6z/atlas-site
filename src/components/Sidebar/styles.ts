import styled from "styled-components"

export const SidebarContainer = styled.div`
  width: 20%;
  height: 73vh;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-top: 5rem;
  padding-left: 2.5rem;
  letter-spacing: 0.075rem;

  @media screen and (max-width: 980px) {
    display: none;
  }

  @media screen and (max-width: 1680px) {
    gap: 0.5rem;
  }

  a {
    @media screen and (max-width: 1680px) {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 1350px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 1080px) {
      font-size: 1rem;
    }

    text-decoration: none;
    color: black;
    font-size: 1.8rem;
    font-weight: 500;

    &.active {
      color: ${(props) => props.theme["blue-500"]};
      font-weight: 700;
    }
  }

  .categories {
    display: flex;
    flex-direction: column;
  }
`
