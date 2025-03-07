import React from 'react';
import { Card, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/ToolCard.css';

const { Meta } = Card;
const { Paragraph } = Typography;

const ToolCard = ({ tool }) => {
  const { id, name, description, icon, externalLink } = tool;
  
  const handleToolClick = () => {
    if (externalLink) {
      window.open(externalLink, '_blank');
    }
  };
  
  return (
    <Card
      hoverable
      className="tool-card"
      cover={<img alt={name} src={icon} className="tool-icon" />}
      onClick={handleToolClick}
    >
      {externalLink ? (
        <Meta
          title={name}
          description={<Paragraph ellipsis={{ rows: 2 }}>{description}</Paragraph>}
        />
      ) : (
        <Link to={`/tool/${id}`}>
          <Meta
            title={name}
            description={<Paragraph ellipsis={{ rows: 2 }}>{description}</Paragraph>}
          />
        </Link>
      )}
    </Card>
  );
};

export default ToolCard; 