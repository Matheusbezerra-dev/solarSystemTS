import styled from "styled-components"

const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 3rem;  
  background-color: rgba(0, 0, 0, 50%); 
  p {
    color: #fff;
    margin-bottom: 5px;
  }
  hr{
    /* color: #fff; */
    width: 18rem;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;

export default function Footer(): JSX.Element {
  return (
    <ContainerFooter>
      
      <p>Desenvolvido por <a href="">Matheus Bezerra</a></p>
      <hr />
    </ContainerFooter>
  )
}
