import React from 'react';
import { useParams } from '@umijs/max';
import { getArticleContent } from '../../mockData/views';
import { Tag } from 'antd';

const Article: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (!id) {
    return <div>文章未找到</div>;
  }

  const article = getArticleContent(id);

  if (!article) {
    return <div>文章未找到</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.cover} alt={article.title} />
      <p>{article.summary}</p>
      <div>
        {article.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div>
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export default Article;
