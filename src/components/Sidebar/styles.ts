import styled from "styled-components"

export const SidebarContainer = styled.div`
  width: 20%;
  height: 73vh;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-top: 5rem;
  padding-left: 2.5rem;

  a {
    text-decoration: none;
    color: black;
    font-size: 1.6rem;
    font-weight: 500;

    &.active{
      color:${(props) => props.theme["blue-500"]};
      font-weight: 700;

    }
  }



  .categories{
    display:flex;
    flex-direction: column;
  }
`
