import type { ArticleList as TArticleList } from '@/types/api/article'

export const ArticleList = ({ articleList }: { articleList: TArticleList }) => {
  return (
    <ul>
      {articleList.items.map((o) => (
        <li key={o.id}>
          <a href={`/${o.id}`}>{o.title}</a>
        </li>
      ))}
    </ul>
  )
}
