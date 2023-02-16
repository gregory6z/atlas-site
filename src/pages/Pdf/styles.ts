import styled from "styled-components"

export const HeaderPdf = styled.div`
  width: 100%;
  height: 3rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  background: ${(props) => props.theme["blue-500"]};

  display: flex;
  align-items: center;
`
export const PdfContainer = styled.div`
  max-width: 70rem;
  margin: 3rem auto 5rem;
  height: 100%;

  button {
    border: 2px solid white;
    cursor: pointer;
    padding: 0.75rem 2.5rem;
    margin-left: 2rem;
    border-radius: 4px;
    background: ${(props) => props.theme["blue-700"]};
    color: white;
    position: fixed;
    z-index: 2000;
    bottom: 4rem;

    @media (max-width: 1080px) {
      padding: 2rem 2.75rem;
      margin-left: 5rem;
      bottom: 6rem;
      > svg {
        display: none;
      }
    }

    p {
      display: none;
      @media (max-width: 1080px) {
        font-size: 2.5rem;
        display: initial;
      }
    }
  }
`
