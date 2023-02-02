import styled from "styled-components"

const H2Title = styled.h2`
  color: white;
  font-family: Epilogue;
  font-size: 40px;
  font-weight: 300;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 70px;
  align-items: center;
  margin-bottom: 40px;
`;

export default function Title({ headline }: any): JSX.Element {
  return (
    <H2Title>{headline}</H2Title>
  );
};
