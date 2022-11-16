import clsx from 'clsx'
import Head from 'next/head'

import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next'

import { ArticleDetail } from '@/components/features/article/ArticleDetail'
import articles from '@/contents/articles.json'

export async function getStaticPaths() {
  return {
    paths: articles.map((o) => {
      return {
        params: {
          id: o.id,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  const article = articles.find((o) => o.id === context.params?.id)
  return {
    props: {
      article,
    },
  }
}

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  article,
}) => {
  if (!article) {
    throw new Error()
  }

  return (
    <>
      <Head>
        <meta property="og:title" content={article.title} />
        <title>{article.title}</title>
      </Head>
      <div className={clsx('tw-py-4')}>
        <a href={'/'}>back</a>
        <ArticleDetail article={article} />
      </div>
    </>
  )
}

export default Page
