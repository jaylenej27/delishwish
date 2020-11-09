import 'antd/dist/antd.css';
import { withApollo } from '../components/WithApollo';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withApollo({ ssr: true })(MyApp);
