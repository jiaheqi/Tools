import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, ToolOutlined, CodeOutlined, CalculatorOutlined } from '@ant-design/icons';
import '../styles/Sidebar.css';

const categories = [
  { key: 'all', name: '全部工具', icon: <AppstoreOutlined /> },
  { key: 'development', name: '开发工具', icon: <CodeOutlined /> },
  { key: 'calculation', name: '计算工具', icon: <CalculatorOutlined /> },
  { key: 'utility', name: '实用工具', icon: <ToolOutlined /> },
  { key: 'new-tools', name: '新工具', icon: <AppstoreOutlined /> },
  // 可以根据需要添加更多分类
];

const Sidebar = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">工具分类</h3>
      <Menu
        mode="inline"
        selectedKeys={[activeCategory]}
        onClick={(e) => onCategoryChange(e.key)}
        className="category-menu"
      >
        {categories.map(category => (
          <Menu.Item key={category.key} icon={category.icon}>
            {category.name}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Sidebar; 