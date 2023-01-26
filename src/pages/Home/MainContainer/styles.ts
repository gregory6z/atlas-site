import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const MainContent = styled.main`
  @media (max-width: 1350px) {
    padding: 2rem;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 750px) {
    padding: intial;
    height: 100%;
    margin-top: 5rem;
  }

  flex: 1;
  display: flex;
  gap: 1rem;
  margin-top: 8%;
  flex-wrap: wrap;

  height: 62vh;
`
export const CategoryCardContainer = styled(NavLink)`
  border: 0.5px solid rgb(218, 218, 218);
  width: 32%;
  height: 45%;
  background: white;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  text-align: center;
  text-decoration: none;
  color: black;

  @media (max-width: 1080px) {
    width: 15rem;
  }

  @media (max-width: 750px) {
    height: 15rem;
  }

  h3 {
    letter-spacing: 0.075rem;
    font-size: 1.6rem;
    margin-bottom: 0.75rem;

    @media screen and (max-width: 1080px) {
      font-size: 1.25rem;
    }

    @media screen and (max-width: 850px) {
      font-size: 1.25rem;
    }
  }

  img {
    margin-top: 0.5rem;
    flex: 1;
  }
`
