import React, { useState } from 'react';
import { Layout, Row, Col, Pagination } from 'antd';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ToolCard from '../components/ToolCard';
import Footer from '../components/Footer';
import '../styles/ToolList.css';

// 模拟更多工具数据
const allTools = Array(30).fill(null).map((_, index) => ({
  id: `${index + 1}`,
  name: `工具 ${index + 1}`,
  description: `这是工具 ${index + 1} 的描述，简单介绍工具的功能和用途。`,
  icon: `/assets/images/tool-${index % 5 + 1}.png`,
  category: ['development', 'utility', 'calculation'][index % 3],
}));

const ToolList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState('all');
  const pageSize = 10;
  
  // 根据分类筛选工具
  const filteredTools = category === 'all' 
    ? allTools 
    : allTools.filter(tool => tool.category === category);
  
  // 分页
  const startIndex = (currentPage - 1) * pageSize;
  const displayTools = filteredTools.slice(startIndex, startIndex + pageSize);
  
  return (
    <Layout className="layout">
      <Header />
      
      <Layout className="main-content">
        <Row>
          <Col xs={24} sm={24} md={6} lg={5} xl={4}>
            <Sidebar activeCategory={category} onCategoryChange={setCategory} />
          </Col>
          <Col xs={24} sm={24} md={18} lg={19} xl={20}>
            <div className="tool-list">
              <h1 className="page-title">所有工具</h1>
              
              <Row gutter={[16, 16]}>
                {displayTools.map(tool => (
                  <Col xs={24} sm={12} md={8} lg={6} key={tool.id}>
                    <ToolCard tool={tool} />
                  </Col>
                ))}
              </Row>
              
              <div className="pagination-container">
                <Pagination
                  current={currentPage}
                  total={filteredTools.length}
                  pageSize={pageSize}
                  onChange={setCurrentPage}
                  showSizeChanger={false}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
      
      <Footer />
    </Layout>
  );
};

export default ToolList; 