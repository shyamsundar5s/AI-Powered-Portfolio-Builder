import React, { useState } from 'react';
import axios from 'axios';

const PortfolioForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    skills: '',
    projects: [{ title: '', description: '' }],
  });

  const [generatedContent, setGeneratedContent] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index][field] = value;
    setFormData({ ...formData, projects: updatedProjects });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { title: '', description: '' }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/generate', formData);
      setGeneratedContent(response.data.content);
    } catch (error) {
      console.error('Error generating portfolio content:', error);
    }
  };

  return (
    <div>
      <h1>AI-Powered Portfolio Builder</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Bio</label>
          <textarea name="bio" value={formData.bio} onChange={handleChange} required />
        </div>
        <div>
          <label>Skills (comma-separated)</label>
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
        </div>
        <div>
          <h3>Projects</h3>
          {formData.projects.map((project, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Project Title"
                value={project.title}
                onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
              />
              <input
                type="text"
                placeholder="Project Description"
                value={project.description}
                onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
              />
            </div>
          ))}
          <button type="button" onClick={addProject}>
            Add Another Project
          </button>
        </div>
        <button type="submit">Generate Portfolio</button>
      </form>
      {generatedContent && (
        <div>
          <h2>Generated Portfolio</h2>
          <p>{generatedContent}</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioForm;
