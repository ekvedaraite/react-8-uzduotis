import styled from "styled-components";

export const MainDiv = styled.div`
max-width: 40%;
margin: 0 auto;
margin-top: 100px;
text-align: center;

@media only screen and (max-width: 768px) {
    max-width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
}
`

export const MainH1 = styled.h1`
color: #113f63;
margin-bottom: 20px;
`

export const MainP = styled.p`
color: #113f63;
margin-bottom: 20px;
`

export const MainButton = styled.button`
background: #2388ce;
border: none;
margin: 8px 20px;
color: white;
padding: 8px 18px;
border-radius: 5px;
font-size: 0.7em;
cursor: pointer;
`