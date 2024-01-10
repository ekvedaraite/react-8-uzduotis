import styled from "styled-components";

export const CardsDiv = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    }
`

export const CardDiv = styled.div`
  background: white;
  width: 22%;
  padding: 20px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.10);
    background: ${({ coloronhover }) => coloronhover || 'black'};
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
    margin-bottom: 20px;
  }
`

export const IconWrapper = styled.div`
    cursor: pointer;
  font-size: 1.3em;
  margin-bottom: 10px; 
  color: #2388ce;
`;

export const CardH1 = styled.h1`
    cursor: pointer;
color: #113f63;
font-size: 1.3em;
margin-bottom: 10px;
`

export const CardP = styled.p`
cursor: pointer;
color: #113f63;
line-height: 25px;
`