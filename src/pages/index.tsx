import { GetServerSideProps } from 'next';
import { fetch } from 'src/shared/utils/fetch';
import { FC } from 'react';

const Home: FC = () => {
  return <h1>Home</h1>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const blogPosts = await fetch('/api/blog-posts');
  return { props: { blogPosts } };
};

export default Home;
