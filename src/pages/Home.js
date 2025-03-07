import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ToolGrid from '../components/ToolGrid';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
  const [category, setCategory] = useState('all');
  
  return (
    <Layout className="layout">
      <Header />
      
      <Layout className="main-content">
        <Row>
          <Col xs={24} sm={24} md={6} lg={5} xl={4}>
            <Sidebar activeCategory={category} onCategoryChange={setCategory} />
          </Col>
          <Col xs={24} sm={24} md={18} lg={19} xl={20}>
            <ToolGrid category={category} />
          </Col>
        </Row>
      </Layout>
      
      <Footer />
    </Layout>
  );
};

export default Home; 