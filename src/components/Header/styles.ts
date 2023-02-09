import styled from "styled-components"

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["blue-500"]};
  width: 100%;
  height: 16vh;
  position: relative;
  border-bottom: #0369a1 1px solid;

  @media screen and (max-width: 1080px) {
    height: 8vh;
  }

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

    @media screen and (max-width: 1350px) {
      padding: 2rem;
    }
  }

  .logoAtlasCarpiagne {
    position: absolute;
    z-index: 200;

    @media screen and (max-width: 1350px) {
      width: 35rem;
    }

    width: 100%;
    height: 100%;

    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .logoLeft {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    @media screen and (max-width: 1080px) {
      display: none;
    }
  }
`

export const FlagContainer = styled.button`
  @media screen and (max-width: 1080px) {
    display: none;
  }

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

    @media screen and (max-width: 1350px) {
      width: 20px;
    }
  }

  @media screen and (max-width: 1680px) {
    width: 12rem;
    font-size: 1.25rem;
    height: 3.25rem;
  }

  @media screen and (max-width: 1350px) {
    width: 10rem;
    font-size: 1.25rem;
  }
`

export const FlagContainerMobile = styled.button`
  @media screen and (min-width: 1080px) {
    display: none;
  }

  background: transparent;
  border: 0;
  position: absolute;
  padding: 1.25rem;

  top: 95%;
  left: 88%;
  transform: translate(-50%, -50%);

  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 8px;
  z-index: 200;
  font-weight: 700;

  font-size: 1.5rem;

  img {
    width: 52px;
  }
`

export const MenuMobile = styled.button`
  @media screen and (min-width: 1080px) {
    display: none;
  }

  background: transparent;
  border: 0;
  position: absolute;
  padding: 1.25rem;

  top: 95%;
  left: 12%;
  transform: translate(-50%, -50%);

  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 8px;
  z-index: 200;
  font-weight: 700;
  font-size: 1.5rem;
`
