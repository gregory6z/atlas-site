import styled from "styled-components"
import * as Dialog from "@radix-ui/react-dialog"

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`

export const Content = styled(Dialog.Content)`
  @media screen and (max-width: 1080px) {
    min-width: 100%;
    min-height: 70%;
  }

  min-width: 32rem;
  min-height: 15rem;
  border-radius: 6px;
  padding: 5rem 4rem;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    margin-bottom: 4rem;

    @media screen and (max-width: 1080px) {
      font-size: 2.25rem;
    }
  }

  .flagContainer {
    display: flex;

    @media screen and (max-width: 1080px) {
      flex-direction: column;
      gap: 1rem;
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  @media screen and (max-width: 1080px) {
    display: none;
  }

  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
`
export const CloseButtonMobile = styled(Dialog.Close)`
  @media screen and (min-width: 1080px) {
    display: none;
  }
  color: black;

  position: absolute;
  background: transparent;
  border: 0;
  top: 2.5rem;
  right: 2.5rem;
  line-height: 0;
  cursor: pointer;
`

export const FlagButton = styled(Dialog.Close)`
  @media screen and (max-width: 1080px) {
    font-size: 3rem;
    width: 100%;
    align-items: center;
    justify-content: initial;
    padding: 3rem;
    gap: 2.5rem;
  }

  img {
    width: 38px;
    @media screen and (max-width: 1080px) {
      width: 56px;
    }
  }
  color: black;
  background: transparent;
  border: 0;
  width: 12rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 3rem;
  border-radius: 8px;
  z-index: 200;

  font-size: 1.25rem;
`
