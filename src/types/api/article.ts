import type { PageInfo } from './page'

export type Article = {
  id: string
  title: string
  content: string
  eyeCatchImageUrl?: string
  createdAt: string
  relatedPageInfo?: ArticleRelatedPageInfo
}

export type ArticleRelatedPageInfo = {
  prev?: Pick<Article, 'id' | 'title'>
  next?: Pick<Article, 'id' | 'title'>
}

export type ArticleListItem = Pick<Article, 'id' | 'title' | 'createdAt'> &
  Partial<Omit<Article, 'id' | 'title' | 'createdAt'>>

export type ArticleList = {
  items: ArticleListItem[]
  pageInfo: PageInfo
}
