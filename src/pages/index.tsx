import clsx from 'clsx'
import Head from 'next/head'

import type { NextPage } from 'next'

import { ArticleList } from '@/components/features/article/ArticleList'
import articles from '@/contents/articles.json'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content={'Article List'} />
        <title>{'Article List'}</title>
      </Head>
      <div className={clsx('tw-py-4')}>
        <p>Article List</p>
        <div>
          <ArticleList
            articleList={{
              items: articles,
              pageInfo: {
                perPageCount: 20,
                totalItemCount: 5000,
                page: 1,
                lastPage: 250,
                hasPrev: false,
                hasNext: true,
              },
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Page
