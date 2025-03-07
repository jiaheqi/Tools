import React, { useState } from 'react';
import { Layout, Menu, Input, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined, HomeOutlined, InfoCircleOutlined, ReadOutlined } from '@ant-design/icons';
import '../styles/Header.css';

const { Header } = Layout;
const { Search } = Input;
const { Title } = Typography;

const AppHeader = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    // 实现搜索功能
    console.log('搜索:', value);
  };

  return (
    <Header className="header">
      <div className="header-background">
        {/* 这里放置背景图片 */}
      </div>
      
      <Row className="header-content">
        <Col span={6} className="logo-container">
          <Link to="/">
            <Title level={3} className="logo">77's Tools</Title>
            <div className="subtitle">77的工具集合</div>
          </Link>
        </Col>
        
        <Col span={12} className="search-container">
          <Search
            placeholder="搜索工具..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onSearch={handleSearch}
            className="search-input"
            size="large"
          />
        </Col>
        
        <Col span={6}>
          <Menu mode="horizontal" className="nav-menu">
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="about" icon={<InfoCircleOutlined />}>
              <Link to="/about">关于</Link>
            </Menu.Item>
            <Menu.Item key="blog" icon={<ReadOutlined />}>
              <a href="https://www.jiaheqi.cloud/" target="_blank" rel="noopener noreferrer">博客</a>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader; 