import 'antd/dist/antd.css';
import App from 'next/app';
import { withApollo } from '../components/WithApollo';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withApollo({ ssr: true })(MyApp);
