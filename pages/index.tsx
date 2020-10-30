import Head from 'next/head'
import styled from 'styled-components';
import { MainLayout } from '../components/MainLayout';

const StyledHeader = styled.h1`
  font-size: 2em;
  text-align: left;
  padding: 16px 16px;
  ${({ theme }) => `
    font-size: 2em;
    text-align: left;
    padding: ${theme['padding-small']} ${theme['padding-small']};
    `}
`;

export default function Home() {
  return (
    <div>
      <MainLayout title="Recipes">
      <StyledHeader>
      hello potato
      </StyledHeader>
      </MainLayout>
    </div>
  )
}
