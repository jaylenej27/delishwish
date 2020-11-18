import nextCookies from 'next-cookies';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { isSessionTokenValid } from '../utils/auth';
import { MainLayout } from '../components/MainLayout';
import { getUserBySessionToken } from '../utils/database';
import { User } from '../utils/types';

export default function Profile(props: { user: User }) {
  return (
    <MainLayout>
      <Head>
        <title>Profile</title>
      </Head>

      <h1>Profile</h1>

      <h2>First Name</h2>
      <p>{props.user.lastName}</p>

      <h2>Username</h2>
      <p>{props.user.username}</p>
    </MainLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { session: token } = nextCookies(context);

  if (!(await isSessionTokenValid(token))) {
    return {
      redirect: {
        destination: '/login?returnTo=/profile',
        permanent: false,
      },
    };
  }

  // TODO: Actually, you could do this with one query
  // instead of two like done here
  const user = await getUserBySessionToken(token);

  return { props: { user } };
}
