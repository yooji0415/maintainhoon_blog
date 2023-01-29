import { allPosts } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import PostList from '@/components/PostList';

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      posts,
    },
  };
};

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Maintain Hoon Blog Page" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Maintain Hoon의 블로그 페이지 입니다." />
        <meta property="og:url" content="https://maintainhoon.vercel.app" />
        <meta property="og:image" content="https://maintainhoon.vercel.app/images/metaLogo.png" />
      </Head>
      <section className="mt-12 mb-10">
        <h1 className="font-bold text-2xl sm:text-4xl font-mono">📝 Blog</h1>
      </section>
      <PostList posts={posts} />
    </>
  );
}
