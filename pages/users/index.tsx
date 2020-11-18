import Head from 'next/head';
import { MainLayout } from '../../components/MainLayout';

export default function Users() {
  return (
    <MainLayout>
      <Head>
        <title>Users</title>
      </Head>

      <h1>Users</h1>
    </MainLayout>
  );
}