import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import '../styles/Footer.css';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="footer">
      <div className="footer-content">
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={8}>
            <h3>关于我们</h3>
            <p>77's Tools 是一个提供各种实用工具的在线平台，旨在提高工作效率和便利性。</p>
          </Col>
          
          <Col xs={24} sm={12} md={8}>
            <h3>联系方式</h3>
            <p><MailOutlined /> 邮箱: example@77tools.com</p>
            <p><GithubOutlined /> GitHub: <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">github.com/username</a></p>
          </Col>
          
          <Col xs={24} sm={12} md={8}>
            <h3>友情链接</h3>
            <ul className="friend-links">
              <li><a href="https://www.jiaheqi.cloud/" target="_blank" rel="noopener noreferrer">个人博客</a></li>
              <li><a href="https://www.ossnav.com/" target="_blank" rel="noopener noreferrer">OSS Nav</a></li>
              {/* 更多友情链接 */}
            </ul>
          </Col>
        </Row>
        
        <Divider style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
        
        <div className="copyright">
          <p>© {new Date().getFullYear()} 77's Tools. 保留所有权利。</p>
          <p>ICP备案号: 京ICP备XXXXXXXX号</p>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter; 