import styled from "styled-components"

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["blue-500"]};
  width: 100%;
  height: 16vh;
  position: relative;
  border-bottom: #0369a1 1px solid;

  display: flex;
  align-items: center;

  .logoAtlasImg {
    width: 7rem;
    height: 7rem;
    /* margin-left: 5vw; */
  }
  .logoFlemme {
    width: 5rem;
    height: 7rem;
  }

  .logos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    padding: 0 10%;
  }

  .logoAtlasCarpiagne {
    position: absolute;

    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .logoLeft {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }
`

export const FlagContainer = styled.button`
  background: transparent;
  border: 0;
  width: 14.6rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 4rem;
  border-radius: 8px;
  z-index: 200;
  font-weight: 700;

  font-size: 1.5rem;

  img {
    width: 48px;

    @media screen and (max-width: 1680px) {
      width: 32px;
    }
  }

  @media screen and (max-width: 1680px) {
    width: 12rem;
    font-size: 1.25rem;
    height: 3.25rem;
  }
`
