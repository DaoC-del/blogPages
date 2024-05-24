import React from 'react';
import { Card, List, Tag } from 'antd';
import { getHomePageData } from '../../mockData/views';
import { Link } from '@umijs/max';

const Home: React.FC = () => {
  const articles = getHomePageData();

  return (
    <div>
      <h1>首页</h1>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={articles}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/article/${item.id}`}>
              <Card
                title={`排名: ${item.views}`}
                cover={<img alt={item.title} src={item.cover} />}
              >
                <Card.Meta title={item.title} description={item.summary} />
                <div>
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Home;
