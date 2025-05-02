import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Templates = ({ onTemplateSelect }) => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/templates');
        setTemplates(response.data);
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
    };

    fetchTemplates();
  }, []);

  return (
    <div>
      <h2>Select a Template</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {templates.map((template) => (
          <div key={template.id} onClick={() => onTemplateSelect(template)}>
            <h3>{template.name}</h3>
            <p>{template.description}</p>
            <img src={template.previewURL} alt={`${template.name} preview`} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
