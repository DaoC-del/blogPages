import React, { useState } from 'react';
import { useLocation } from '@umijs/max';
import { List, Card, Tag, Input, Pagination } from 'antd';
import { getSearchResults } from '../../mockData/views';

const { Search } = Input;

const SearchResults: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('searchQuery') || '';
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const filteredArticles = getSearchResults(searchQuery);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <h1>搜索结果</h1>
      <Search
        placeholder="搜索文章"
        defaultValue={searchQuery}
        onSearch={(value) => {
          window.location.href = `/search?searchQuery=${value}`;
        }}
        style={{ width: 400, marginBottom: 20 }}
      />
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={paginatedArticles}
        renderItem={(item) => (
          <List.Item>
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
          </List.Item>
        )}
      />
      <Pagination
        total={filteredArticles.length}
        pageSize={pageSize}
        current={currentPage}
        onChange={(page) => setCurrentPage(page)}
        style={{ marginTop: 20 }}
      />
    </div>
  );
};

export default SearchResults;
