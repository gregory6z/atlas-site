import { ButtonHTMLAttributes } from "react"
import styled from "styled-components"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string | null
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonContainer type="button" {...rest}>
      {title}
    </ButtonContainer>
  )
}
export const ButtonContainer = styled.button`
  width: 48%;

  @media (max-width: 1680px) {
    width: 25rem;
    font-size: 1rem;
    height: 2.75rem;
  }

  @media (max-width: 1080px) {
    width: 100%;
    font-size: 2.5rem;
    padding: 0 2.5rem;
    height: 4.5rem;
  }

  height: 3.25rem;
  background: ${(props) => props.theme["blue-500"]};
  border: 0;
  border-radius: 8px;
  color: white;

  white-space: nowrap;
  border: 1px;
  overflow: hidden;

  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 1rem;

  font-size: 1.25rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 50rem;
`
