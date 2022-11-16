import { clsx } from 'clsx'

import type { Article } from '@/types/api/article'

export const ArticleDetail = ({ article }: { article: Article }) => {
  return (
    <div className={clsx('tw-flex tw-flex-col', 'tw-gap-4')}>
      <p className={clsx('tw-text-lg tw-font-bold')}>{article.title}</p>
      {article.eyeCatchImageUrl && (
        <img
          src={article.eyeCatchImageUrl}
          alt={article.title}
          height={400}
          width={600}
        />
      )}
      <p className={clsx('tw-text-base')}>{article.content}</p>
      <p className={clsx('tw-text-sm')}>{article.createdAt}</p>
    </div>
  )
}
