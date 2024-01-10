import styled from "styled-components";

export const Header = styled.header`
background: white;
display: flex;
flex-wrap: nowrap;
width: 100%;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

@media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`

export const HeaderH1 = styled.h1`
color: #2388ce;
padding: 10px 20px;
font-size: 1em;
font-weight: 400;
`

export const HeaderDiv = styled.div`
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
`

export const HeaderA = styled.a `
color: #113f63;
gap: 10px;
text-decoration: none;

&:hover {
    color: #2388ce;
    cursor: pointer;
}
`

export const HeaderButton = styled.button`
background: #2388ce;
border: none;
margin: 8px 20px;
color: white;
padding: 8px 15px;
border-radius: 5px;
font-size: 0.7em;
cursor: pointer;
`