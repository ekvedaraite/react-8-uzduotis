import { CardDiv, CardH1, CardP, CardsDiv, IconWrapper} from './components/Cards'
import { GlobalStyle } from './components/GlobalStyle'
import { Header, HeaderA, HeaderButton, HeaderDiv, HeaderH1 } from './components/Header'
import { MainButton, MainDiv, MainH1, MainP } from './components/MainDiv'
import { GiStack } from 'react-icons/gi'
import { FaPalette, FaFingerprint } from 'react-icons/fa'
import { FaInfinity } from 'react-icons/fa6'

function App() {
  const cardsData = [
    {
      icon: <GiStack />,
      title: 'Option 1',
      description: 'Maiores reiciendis tenetur sunt eaque asperiores repellat molestiae atque natus accusamus inventore quidem ut possimus.',
    },
    {
      icon: <FaPalette />,
      title: 'Option 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, deserunt! Veritatis voluptate ipsam omnis itaque.',
    },
    {
      icon: <FaInfinity />,
      title: 'Option 3',
      description: 'Maiores reiciendis tenetur sunt eaque asperiores repellat molestiae atque natus accusamus inventore quidem ut possimus. ',
    },
    {
      icon: <FaFingerprint />,
      title: 'Option 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing el it. Sunt, deserunt! Veritatis voluptate ipsam omnis itaque. ',
    },
  ]

  return (
    <>
    <GlobalStyle/>
    <Header>
    <HeaderH1>LandingPage</HeaderH1>
    <HeaderDiv>
    <HeaderA href='#'>Home</HeaderA>
    <HeaderA href='#'>About</HeaderA>
    <HeaderA href='#'>Contacts</HeaderA>
    <HeaderA href='#'>Faq</HeaderA>
    </HeaderDiv>
    <HeaderButton>Get Started</HeaderButton>
    </Header>

    <MainDiv>
    <MainH1>React Landing Page Website Template</MainH1>
    <MainP>Made with react and styled components</MainP>
    <MainButton>Get Started</MainButton>
    </MainDiv>

    <CardsDiv>
        {cardsData.map((card, index) => (
          <CardDiv 
          key={index}
          coloronhover={index % 2 === 0 ? 'red' : 'black'}
          >
            <IconWrapper>{card.icon}</IconWrapper>
            <CardH1>{card.title}</CardH1>
            <CardP>{card.description}</CardP>
          </CardDiv>
        ))}
      </CardsDiv>
    </>
  )
}

export default App