import { ThemeProvider } from 'styled-components';
import { Component, ReactNode } from 'react';
import { theme } from '../utils/theme';
import { GlobalStyle } from '../utils/globalStyle';
import Head from 'next/head';
import { Layout } from 'antd';
import { MainFooter } from './Footer';
import { MainNavbar} from './NavBar';

const { Content } = Layout;

const MainHead = ({ title }: { title: string }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
  
    <meta
      name="description"
      content="A recipe to shopping list app"
    />
  </Head>
);

type Props = {
  children: ReactNode;
  title?: string;
};


export class MainLayout extends Component<Props> {
  render() {
    const { title, children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <MainHead title={title} />
        <GlobalStyle />
        <Layout>
          <MainNavbar /> 
          <Content>{children}</Content>
          <MainFooter />
        </Layout>
      </ThemeProvider>
    );
  }
}