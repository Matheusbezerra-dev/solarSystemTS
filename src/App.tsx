import styled from 'styled-components';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

const ContainderApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function App(): JSX.Element {
  return (
    <ContainderApp>      
      <Header />
      <Home />
      <Footer />
    </ContainderApp>
  )
}