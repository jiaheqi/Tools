import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import ToolCard from './ToolCard';
import { RightOutlined } from '@ant-design/icons';
import '../styles/ToolGrid.css';

// 模拟工具数据
const mockTools = [
  {
    id: '1',
    name: 'JSON格式化',
    description: '在线JSON格式化工具，支持JSON压缩、美化等功能',
    icon: '/assets/images/json-icon.png',
    category: 'development',
  },
  {
    id: '2',
    name: '图片压缩',
    description: '在线图片压缩工具，支持JPG、PNG等格式',
    icon: '/assets/images/image-icon.png',
    category: 'utility',
  },
  // 更多工具...
];

const ToolGrid = ({ category = 'all' }) => {
  // 根据分类筛选工具
  const filteredTools = category === 'all' 
    ? mockTools 
    : mockTools.filter(tool => tool.category === category);
  
  // 首页只显示前8个工具
  const displayTools = filteredTools.slice(0, 8);
  
  return (
    <div className="tool-grid">
      <div className="tool-grid-header">
        <h2>热门工具</h2>
        <Link to="/tools">
          <Button type="link" className="more-tools-btn">
            更多工具 <RightOutlined />
          </Button>
        </Link>
      </div>
      
      <Row gutter={[16, 16]}>
        {displayTools.map(tool => (
          <Col xs={24} sm={12} md={8} lg={6} key={tool.id}>
            <ToolCard tool={tool} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ToolGrid; 