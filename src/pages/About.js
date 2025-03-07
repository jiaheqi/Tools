import React from 'react';
import { Layout, Row, Col, Card, Typography, Divider } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/About.css';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <Layout className="layout">
      <Header />
      
      <div className="about-container">
        <Card className="about-card">
          <Title level={2}>关于 77's Tools</Title>
          <Divider />
          
          <Paragraph>
            77's Tools 是一个集合了各种实用工具的在线平台，旨在为用户提供便捷、高效的工具服务。
            我们的目标是通过简洁的界面和强大的功能，帮助用户解决日常工作和生活中的各种问题。
          </Paragraph>
          
          <Title level={3}>我们的特点</Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Card className="feature-card">
                <Title level={4}>简洁易用</Title>
                <Paragraph>
                  所有工具都设计得简单直观，无需复杂操作，即可快速完成任务。
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card className="feature-card">
                <Title level={4}>功能强大</Title>
                <Paragraph>
                  每个工具都经过精心开发，提供专业级的功能和性能。
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card className="feature-card">
                <Title level={4}>持续更新</Title>
                <Paragraph>
                  我们会不断添加新工具，并优化现有工具，以满足用户不断变化的需求。
                </Paragraph>
              </Card>
            </Col>
          </Row>
          
          <Divider />
          
          <Title level={3}>联系我们</Title>
          <Paragraph>
            如果您有任何问题、建议或合作意向，欢迎通过以下方式联系我们：
          </Paragraph>
          <Paragraph>
            邮箱：example@77tools.com<br />
            博客：<a href="https://www.jiaheqi.cloud/" target="_blank" rel="noopener noreferrer">https://www.jiaheqi.cloud/</a>
          </Paragraph>
        </Card>
      </div>
      
      <Footer />
    </Layout>
  );
};

export default About; 