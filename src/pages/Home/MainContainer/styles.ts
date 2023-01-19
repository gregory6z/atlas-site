import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const MainContent = styled.main`
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

  h3 {
    letter-spacing: 0.075rem;
    font-size: 1.6rem;
    margin-bottom: 0.75rem;
  }

  img {
    margin-top: 0.5rem;
    flex: 1;
  }
`
