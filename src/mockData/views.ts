import { articles } from './articles';

// 获取主页数据：按浏览量排序，只包含摘要
export const getHomePageData = () => {
  return articles
    .sort((a, b) => b.views - a.views)
    .map(({ id, title, cover, summary, views, tags }) => ({
      id,
      title,
      cover,
      summary,
      views,
      tags,
    }));
};

// 获取文章内容数据：根据文章ID获取完整内容
export const getArticleContent = (id: string) => {
  return articles.find(article => article.id === id);
};

// 获取搜索结果数据：根据搜索关键字过滤文章
export const getSearchResults = (query: string) => {
  return articles.filter(article =>
    article.title.includes(query) ||
    article.summary.includes(query) ||
    article.tags.some(tag => tag.includes(query))
  ).map(({ id, title, cover, summary, views, tags }) => ({
    id,
    title,
    cover,
    summary,
    views,
    tags,
  }));
};
