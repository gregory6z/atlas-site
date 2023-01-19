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
  min-width: 32rem;
  min-height: 15rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    margin-top: 1rem;
    margin-bottom: 4rem;
  }

  .flagContainer {
    display: flex;
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
`
export const FlagButton = styled(Dialog.Close)`
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
